import React from "react";
import styles from "../styles/layout/Footer.module.scss";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Mike Rust, Web Developer</h4>
        <a href="mailto: misqke.rust@yahoo.com">
          <h5>misqke.rust@yahoo.com</h5>
        </a>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/michael-rust-66b5b3226/"
          >
            <SiLinkedin className={styles.icon} />
            LinkedIn
          </a>
          <a className={styles.link} href="https://github.com/misqke">
            <SiGithub className={styles.icon} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
