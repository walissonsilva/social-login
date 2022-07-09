import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./AppRoutes.routes";
import { AuthRoutes } from "./AuthRoutes.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
