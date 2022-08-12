import { Layout, GlobalStyles } from "../components";
import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  primary: "#0ab",
  secondary: "#045",
  body: "#000510",
  text: "#e5e5e5",
  glass: "#00071513",
  bg: "#000510",
  gray: "#666",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
