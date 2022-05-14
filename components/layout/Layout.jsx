import React from "react";
import styles from "../../styles/layout/Layout.module.scss";
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Mike Rust Portfolio</title>
      </Head>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
