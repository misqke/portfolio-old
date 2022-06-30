import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "../styles/themes";
import useDarkMode from "../components/useDarkMode";
import { GlobalStyles, Layout } from "../components";
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mounted] = useDarkMode();
  const [hue, setHue] = useState(199);

  const changeHue = (num) => {
    if (num < 0 || num > 360) return;
    setHue(num);
  };

  const lightTheme = {
    body: `hsl(${hue}, 100%, 98%)`,
    text: `hsl(${hue}, 80%, 10%)`,
    primary: `hsl(${hue}, 100%, 25%)`,
    bg: `hsl(${hue}, 50%, 80%)`,
    bgTrans: `hsla(${hue}, 50%, 80%, .6)`,
  };

  const darkTheme = {
    body: `hsl(${hue}, 100%, 2%)`,
    text: `hsl(${hue}, 100%, 95%)`,
    primary: `hsl(${hue}, 80%, 60%)`,
    bg: `hsl(${hue}, 60%, 12%)`,
    bgTrans: `hsla(${hue}, 60%, 12%, .6)`,
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const savedHue = window.localStorage.getItem("hue");
    if (savedHue) setHue(savedHue);
  }, []);

  if (!mounted) return;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout
        toggle={themeToggler}
        theme={theme}
        hue={hue}
        changeHue={changeHue}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
