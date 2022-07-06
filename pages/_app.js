import { ThemeProvider } from "styled-components";
import useDarkMode from "../components/useDarkMode";
import { GlobalStyles, Layout } from "../components";
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mounted] = useDarkMode();
  const [mode, setMode] = useState("pop");
  const [hue, setHue] = useState(199);

  const changeMode = (bgMode) => {
    window.localStorage.setItem("mode", bgMode);
    setMode(bgMode);
  };

  const changeHue = (num) => {
    if (num < 0 || num > 360) return;
    window.localStorage.setItem("hue", num);
    setHue(num);
  };

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

  useEffect(() => {
    const savedHue = window.localStorage.getItem("hue");
    const savedMode = window.localStorage.getItem("mode");
    if (savedHue) setHue(savedHue);
    if (savedMode) setMode(savedMode);
  }, []);

  if (!mounted) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout
        toggle={themeToggler}
        theme={theme}
        hue={hue}
        changeHue={changeHue}
        mode={mode}
        changeMode={changeMode}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
