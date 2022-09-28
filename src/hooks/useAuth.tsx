import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { startAsync } from "expo-auth-session";
import { createContext, useContext, useState } from "react";
import { SocialLoginProvider } from "../utils/providers";

interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
}

interface AuthContextData {
  isLogged: boolean;
  signIn(provider: SocialLoginProvider): Promise<void>;
  userInfo: User;
  loadUserInfoFromStorage: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AUTH_STORAGE_KEY = "@your-tasks/user-info";
const GITHUB_CLIENT_ID = process && process.env && process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET =
  process && process.env && process.env.GITHUB_CLIENT_SECRET;
const REDIRECT_URI = process && process.env && process.env.REDIRECT_URI;
const GOOGLE_CLIENT_ID = process && process.env && process.env.GOOGLE_CLIENT_ID;

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState<User>({} as User);

  function signIn(provider: SocialLoginProvider): Promise<void> {
    switch (provider) {
      case "github":
        return signInWithGitHub();
      case "google":
        return signInWithGoogle();
    }
  }

  async function loadUserInfoFromStorage() {
    const data = await AsyncStorage.getItem(AUTH_STORAGE_KEY);

    if (data) {
      const userData = JSON.parse(data);

      setUserInfo(userData);
      setIsLogged(true);
    }
  }

  async function signInWithGitHub() {
    const SCOPE = "read:user";
    const STATE = "banana";

    // 1. Autorização -> Code
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`;

    const response = await startAsync({ authUrl });

    if (response.type === "success") {
      const { code } = response.params;

      // 2. Pedir access token (code) -> Access token
      const responseAccessToken = await axios.post(
        `https://github.com/login/oauth/access_token`,
        {
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          code,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const accessToken = responseAccessToken.data.access_token;

      // 3. Pedir os dados do usuário (access token)
      // https://api.github.com/user
      const responseFinal = await axios.get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const { avatar_url, id, name, email } = responseFinal.data;

      // A autenticação deu certo!
      const userData = {
        id,
        name,
        email,
        profileImage: avatar_url,
      };

      setUserInfo(userData);
      setIsLogged(true);

      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
    }
  }

  async function signInWithGoogle() {
    const RESPONSE_TYPE = "token";
    const SCOPE = encodeURI("profile email");

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&prompt=select_account`;

    const response = await startAsync({ authUrl });

    if (response.type === "success") {
      const { access_token } = response.params;

      const userInfoResponse = await axios.get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`
      );

      const { id, name, email, picture } = userInfoResponse.data;

      const userData = {
        id,
        name,
        email,
        profileImage: picture,
      };

      setUserInfo(userData);
      setIsLogged(true);

      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
    setIsLogged(false);
    setUserInfo({} as User);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signIn,
        userInfo,
        loadUserInfoFromStorage,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("You must use useAuth inside of AuthProvider");
  }

  return context;
};
