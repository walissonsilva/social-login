import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { AuthProvider } from "./src/hooks/useAuth";
import { Routes } from "./src/routes/routes";

import darkTheme from "./src/styles/themes/dark";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <StatusBar style="light" />
    </ThemeProvider>
  );
}
