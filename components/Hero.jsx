import React from "react";
import HeroCanvas from "./HeroCanvas";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container} id="hero">
      <div className={styles.wrapper}>
        <div className={styles.text_box}>
          <h1>
            Hi, I&#39;m <span>Mike</span>,
            <br />
            I&#39;m a web <span>developer</span>.
          </h1>
        </div>
        <div className={styles.img_box}>
          <HeroCanvas />
        </div>
      </div>
    </div>
  );
};

export default Hero;
