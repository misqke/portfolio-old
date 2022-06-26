import React, { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    setMounted(false);
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    setMounted(true);
  }, [theme]);

  return [theme, themeToggler, mounted];
};

export default useDarkMode;
