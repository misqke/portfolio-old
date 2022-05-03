import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://www.mikerustportfolio.com/";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
