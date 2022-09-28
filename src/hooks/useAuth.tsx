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

  async function signInWithGitHub() {
    console.log("Login com o GitHub");
  }
  async function signInWithGoogle() {
    const CLIENT_ID =
      "1017013712545-954bl8tv2cr32nfajecbgce9j6ev5c1s.apps.googleusercontent.com";
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
