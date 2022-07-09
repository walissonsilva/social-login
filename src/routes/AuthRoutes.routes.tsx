import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SignIn } from "../screens/SignIn";

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={SignIn} />
    </Navigator>
  );
}
