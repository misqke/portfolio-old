import React from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <h3 className={styles.sectionTitle}>About me</h3>

      <div className={styles.textContainer}>
        <div>
          Hi, I&#x27;m <span>Mike</span>. I&#x27;m a self taught{" "}
          <span>web developer</span> located in Ellwood City, PA.
        </div>
        <div>
          I fell in love with coding at my first{" "}
          <span>&quot;Hello World&quot;</span> and haven&#x27;t looked back.
        </div>
        <div>
          My work is focused towards the <span>MERN</span> stack, but I&#x27;m
          always looking for a reason to learn something new.
        </div>
        <div>
          If you need a skilled <span>problem solver</span> with a love for
          building <span>interactive</span> and <span>functional</span>{" "}
          applications, look no further!
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={"/me4.png"}
          width={501}
          height={766}
          // layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default About;
