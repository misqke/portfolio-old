import React from "react";
import styles from "../styles/custom404.module.scss";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.wrapper}>
        <p>404</p>
        <p>THIS PAGE DOES NOT EXIST</p>
      </div>
      <Footer />
    </div>
  );
};

export default Custom404;
