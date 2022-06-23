import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import useDarkMode from "../components/useDarkMode";
import { GlobalStyles } from "../components";
import React from "react";
import { Page } from "../styles/components";
import { Nav } from "../components";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mounted) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Page>
        <Nav />
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

export default MyApp;
