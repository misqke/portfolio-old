import React from "react";
import styles from "../styles/hero/Skills.module.scss";
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
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pyramid}>
        <span className={`${styles.row}`}>
          <div className={styles.skillBox}>
            <SiJavascript className={styles.icon} />
            <p className={styles.text}>JavaScript</p>
          </div>
        </span>
        <span className={`${styles.row}`}>
          <div className={styles.skillBox}>
            <SiHtml5 className={styles.icon} />
            <p className={styles.text}>HTML</p>
          </div>
          <div className={styles.skillBox}>
            <SiCss3 className={styles.icon} />
            <p className={styles.text}>CSS</p>
          </div>
        </span>
        <span className={`${styles.row}`}>
          <div className={styles.skillBox}>
            <SiReact className={styles.icon} />
            <p className={styles.text}>React</p>
          </div>
          <div className={styles.skillBox}>
            <SiNextdotjs className={styles.icon} />
            <p className={styles.text}>Next</p>
          </div>
          <div className={styles.skillBox}>
            <SiRedux className={styles.icon} />
            <p className={styles.text}>Redux</p>
          </div>
        </span>
      </div>
      <div className={styles.pyramid}>
        <span className={`${styles.row}`}>
          <div className={styles.skillBox}>
            <SiNodedotjs className={styles.icon} />
            <p className={styles.text}>Node</p>
          </div>
        </span>
        <span className={`${styles.row}`}>
          <div className={styles.skillBox}>
            <SiExpress className={styles.icon} />
            <p className={styles.text}>Express</p>
          </div>
          <div className={styles.skillBox}>
            <SiMongodb className={styles.icon} />
            <p className={styles.text}>MongoDB</p>
          </div>
        </span>
        <span className={`${styles.row}`}>
          <div className={styles.skillBox}>
            <SiPuppeteer className={styles.icon} />
            <p className={styles.text}>Puppeteer</p>
          </div>
          <div className={styles.skillBox}>
            <SiGit className={styles.icon} />
            <p className={styles.text}>Git</p>
          </div>
          <div className={styles.skillBox}>
            <SiGithub className={styles.icon} />
            <p className={styles.text}>GitHub</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Skills;
