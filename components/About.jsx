import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.blur}></div>
      <h2>About</h2>
      <div className={styles.wrapper}>
        <div className={styles.about_box}>
          <div>
            Hi. I&#39;m <span>Mike</span>, a self taught{" "}
            <span>web developer</span> located in Ellwood City, PA.
          </div>
          <div>
            I fell in love with coding at my first{" "}
            <span>&#34;Hello World&#34;</span> and haven&#39;t looked back.
          </div>
          <div>
            My work is focused towards the <span>MERN</span> stack, but i&#39;m
            always looking for a reason to learn something new.
          </div>
          <div>
            If you need a skilled <span>problem solver</span> with a love for
            building
            <span> interactive</span> and <span>functional</span> applications,
            look no further!
          </div>
        </div>
        <div className={styles.about_box}>
          <div className={styles.skills_container}>
            <div className={styles.skill_wrapper}>
              <p>HTML</p>
              <Image
                src={"/icons/html_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>CSS</p>
              <Image
                src={"/icons/css_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>SASS</p>
              <Image
                src={"/icons/sass_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>BOOTSTRAP</p>
              <Image
                src={"/icons/bootstrap_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>JAVASCRIPT</p>
              <Image
                src={"/icons/js_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>REACT</p>
              <Image
                src={"/icons/react_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>REDUX</p>
              <Image
                src={"/icons/redux_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>GIT</p>
              <Image
                src={"/icons/git_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>NODE</p>
              <Image
                src={"/icons/node_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>EXPRESS</p>
              <Image
                src={"/icons/express_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
            <div className={styles.skill_wrapper}>
              <p>MONGODB</p>
              <Image
                src={"/icons/mongo_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>

            <div className={styles.skill_wrapper}>
              <p>GIT HUB</p>
              <Image
                src={"/icons/github_icon.png"}
                width={256}
                height={256}
                alt="html"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
