import React from "react";
import styles from "../../styles/hero/Hero.module.scss";
import Torch from "./Torch";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Mike Rust</h2>
        <span></span>
        <h1>Developer</h1>
      </div>
      <div className={`${styles.torchBox} ${styles.torch1}`}>
        <Torch />
      </div>
      <div className={`${styles.torchBox} ${styles.torch2}`}>
        <Torch />
      </div>
    </div>
  );
};

export default Hero;
