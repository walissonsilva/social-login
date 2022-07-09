import { createContext, useContext, useState } from "react";
import { SocialLoginProvider } from "../utils/providers";

interface AuthContextData {
  isLogged: boolean;
  signIn(provider: SocialLoginProvider): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  function signIn(provider: SocialLoginProvider): Promise<void> {
    switch (provider) {
      case "github":
        return signInWithGitHub();
      case "google":
        return signInWithGoogle();
    }
  }

  async function signInWithGitHub() {
    console.log("Login com o Github");
  }
  async function signInWithGoogle() {
    console.log("Login com o Google");
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signIn,
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
