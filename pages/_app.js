import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes";
import useDarkMode from "../components/useDarkMode";
import React, { useState } from "react";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`;

function MyApp({ Component, pageProps }) {
  const [theme, mounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mounted) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
