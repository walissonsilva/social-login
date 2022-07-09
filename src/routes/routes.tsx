import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import { AppRoutes } from "./AppRoutes.routes";
import { AuthRoutes } from "./AuthRoutes.routes";

export function Routes() {
  const { isLogged } = useAuth();

  return (
    <NavigationContainer>
      {isLogged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
