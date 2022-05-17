import React from "react";
import styles from "../../styles/hero/Hero.module.scss";
import Skills from "./Skills";
import Links from "./Links";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Mike Rust</h2>
        <span></span>
        <h1>Web Developer</h1>
      </div>
      <Skills />
      <Links />
    </div>
  );
};

export default Hero;
