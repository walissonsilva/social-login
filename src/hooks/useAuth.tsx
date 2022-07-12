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
}

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

  // Adicione as variáveis de ambiente (veja o arquivo .env.example)
  async function signInWithGitHub() {
    const CLIENT_ID = process.env.GITHUB_AUTH_CLIENT_ID || "";
    const CLIENT_SECRET = process.env.GITHUB_AUTH_CLIENT_SECRET || "";
    const REDIRECT_URI =
      "https://auth.expo.io/@walissonsilva/meetup-social-login";
    const SCOPE = "read:user";

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=234dsfsjj24&`;

    const response = await startAsync({ authUrl });

    if (response.type === "success") {
      const { code } = response.params;

      const responseAccessToken = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          redirect_uri: REDIRECT_URI,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const { access_token } = responseAccessToken.data;

      const responseUserInfo = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });

      const { name, email, id, avatar_url } = responseUserInfo.data;

      setUserInfo({
        name,
        id,
        email,
        profileImage: avatar_url,
      });
      setIsLogged(true);
    }
  }

  // Adicione as variáveis de ambiente (veja o arquivo .env.example)
  async function signInWithGoogle() {
    const CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID;
    ("");
    const REDIRECT_URI =
      "https://auth.expo.io/@walissonsilva/meetup-social-login";
    const RESPONSE_TYPE = "token";
    const SCOPE = encodeURI("profile email");

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&prompt=select_account`;

    const response = await startAsync({ authUrl });

    if (response.type === "success") {
      const { access_token } = response.params;

      const userInfoResponse = await axios.get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`
      );

      const { id, name, email, picture } = userInfoResponse.data;

      setUserInfo({
        id,
        name,
        email,
        profileImage: picture,
      });
      setIsLogged(true);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signIn,
        userInfo,
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
