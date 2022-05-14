import React from "react";
import styles from "../styles/custom404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p>404</p>
        <p>THIS PAGE DOES NOT EXIST</p>
      </div>
    </div>
  );
};

export default Custom404;
