import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes/routes";
import { Container } from "./src/styles/App";

import darkTheme from "./src/styles/themes/dark";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />

      <StatusBar style="light" />
    </ThemeProvider>
  );
}
