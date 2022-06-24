import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import useDarkMode from "../components/useDarkMode";
import { GlobalStyles } from "../components";
import React from "react";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mounted) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
