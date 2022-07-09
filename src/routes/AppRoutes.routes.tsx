import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { History } from "../screens/History";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#282a36",
        tabBarInactiveTintColor: "#282a3677",
        // tabBarLabelPosition: "beside-icon",
      }}
    >
      <Screen
        name="Tasks"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
