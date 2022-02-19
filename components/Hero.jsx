import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container} id="hero">
      <div className={styles.wrapper}>
        <div className={`${styles.box} ${styles.left}`}>
          <h1>
            Hi, i&#39;m <span>Mike</span>,
          </h1>
          <h1>
            I&#39;m a web <span>developer</span>.
          </h1>
        </div>
        <div className={`${styles.box} ${styles.right}`}>
          <div className={styles.img_container}>
            <Image
              src="/imgs/me3.png"
              alt=""
              height={800}
              width={533}
              priority
            ></Image>
          </div>
          <div className={styles.blur}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
