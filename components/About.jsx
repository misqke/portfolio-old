import React from "react";
import styles from "../styles/About.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiPuppeteer,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiGit,
} from "react-icons/si";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <h3 className={styles.sectionTitle}>About me</h3>
      <div className={styles.innerContainer}>
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
        <div className={styles.skillsContainer}>
          <div className={styles.skillBox}>
            <SiHtml5 className={styles.icon} />
            html
          </div>
          <div className={styles.skillBox}>
            <SiCss3 className={styles.icon} />
            css
          </div>
          <div className={styles.skillBox}>
            <SiJavascript className={styles.icon} />
            javascript
          </div>
          <div className={styles.skillBox}>
            <SiReact className={styles.icon} />
            react
          </div>
          <div className={styles.skillBox}>
            <SiRedux className={styles.icon} />
            redux
          </div>
          <div className={styles.skillBox}>
            <SiNodedotjs className={styles.icon} />
            node
          </div>
          <div className={styles.skillBox}>
            <SiExpress className={styles.icon} />
            express
          </div>
          <div className={styles.skillBox}>
            <SiMongodb className={styles.icon} />
            mongoDB
          </div>
          <div className={styles.skillBox}>
            <SiPuppeteer className={styles.icon} />
            puppeteer
          </div>
          <div className={styles.skillBox}>
            <SiGit className={styles.icon} />
            git
          </div>
          <div className={styles.skillBox}>
            <SiGithub className={styles.icon} />
            github
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
