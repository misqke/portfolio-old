import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container} id="hero">
      <div className={styles.wrapper}>
        <div className={styles.text_box}>
          <h1>
            Hi, i&#39;m <span>Mike</span>,
            <br />
            I&#39;m a web <span>developer</span>.
          </h1>
        </div>
        <div className={styles.img_box}>
          <Image
            src="/imgs/me3.png"
            alt=""
            height={800}
            width={533}
            priority
          ></Image>
          <div className={styles.blurY}></div>
          <div className={styles.blurX}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
