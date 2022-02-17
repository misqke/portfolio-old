import React from "react";
import Head from "next/head";
import styles from "../../styles/Layout.module.scss";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mike Rust Portfolio</title>
        <meta
          name="description"
          content="Michael Rust, web developer portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <Nav />
        {children}
      </div>
    </>
  );
};

export default Layout;
