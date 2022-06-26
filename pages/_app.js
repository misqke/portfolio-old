import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import useDarkMode from "../components/useDarkMode";
import { GlobalStyles, Layout } from "../components";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mounted) return;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout toggle={themeToggler} theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
