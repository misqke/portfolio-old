import React from "react";
import Link from "next/link";
import styles from "../styles/hero/Links.module.scss";

const Links = () => {
  return (
    <div className={styles.container}>
      <span className={styles.col}>
        <Link href="#about" passHref>
          <a className={styles.btn}>About me</a>
        </Link>
      </span>
      <span className={styles.col}>
        <Link href="#projects" passHref>
          <a className={styles.btn}>My work</a>
        </Link>
      </span>
      <span className={`${styles.col}`}>
        <Link href="#contact" passHref>
          <a className={styles.btn}>Get in touch</a>
        </Link>
      </span>
    </div>
  );
};

export default Links;
