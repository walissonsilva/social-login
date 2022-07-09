import { createContext, useContext, useState } from "react";

interface AuthContextData {
  isLogged: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
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
