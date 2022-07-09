import React, { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState("pop");
  const [hue, setHue] = useState(199);

  const setThemeMode = (newTheme) => {
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const themeToggler = () => {
    theme === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  const modeToggler = (newMode) => {
    window.localStorage.setItem("mode", newMode);
    setMode(newMode);
  };

  const hueToggler = (newHue) => {
    window.localStorage.setItem("hue", newHue);
    setHue(newHue);
  };

  useEffect(() => {
    setMounted(false);
    const localTheme = window.localStorage.getItem("theme");
    const savedHue = window.localStorage.getItem("hue");
    const savedMode = window.localStorage.getItem("mode");
    localTheme && setTheme(localTheme);
    savedHue && setHue(savedHue);
    savedMode && setMode(savedMode);
    setMounted(true);
  }, [theme]);

  return [theme, themeToggler, hue, hueToggler, mode, modeToggler, mounted];
};

export default useDarkMode;
