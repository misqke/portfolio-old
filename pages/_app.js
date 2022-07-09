import { ThemeProvider } from "styled-components";
import useDarkMode from "../components/useDarkMode";
import { GlobalStyles, Layout } from "../components";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, hue, hueToggler, mode, modeToggler, mounted] =
    useDarkMode();

  const lightTheme = {
    body: `hsl(${hue}, 50%, 98%)`,
    text: `hsl(${hue}, 50%, 2%)`,
    primary: `hsl(${hue}, 50%, 25%)`,
    bg: `hsl(${hue}, 50%, 70%)`,
    bgTrans: `hsla(${hue}, 50%, 70%, .6)`,
  };

  const darkTheme = {
    body: `hsl(${hue}, 50%, 2%)`,
    text: `hsl(${hue}, 50%, 98%)`,
    primary: `hsl(${hue}, 50%, 75%)`,
    bg: `hsl(${hue}, 50%, 25%)`,
    bgTrans: `hsla(${hue}, 50%, 25%, .6)`,
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mounted) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout
        toggle={themeToggler}
        theme={theme}
        hue={hue}
        changeHue={hueToggler}
        mode={mode}
        changeMode={modeToggler}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
