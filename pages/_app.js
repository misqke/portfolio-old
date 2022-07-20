import { Layout, GlobalStyles } from "../components";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/store";
import React from "react";

const theme = {
  primary: "#0ab",
  secondary: "#045",
  body: "#012",
  text: "#e5e5e5",
  glass: "#05051543",
  bg: "#050515",
  gray: "#666",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
