import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/projects/ProjectDetails.module.scss";
import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import { projects } from "../../projects";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPuppeteer,
  SiGithub,
} from "react-icons/si";

const ProjectDetails = ({ project }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mike Rust - {project.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      <h2 className={styles.sectionTitle}>{project.name}</h2>
      <div className={styles.topContainer}>
        <div className={styles.img}>
          <Image
            src={project.img.large}
            alt={project.name}
            width={1897}
            height={880}
            priority
          />
        </div>
        <div className={styles.techContainer}>
          {project.tech.includes("react") === true && (
            <div className={styles.iconContainer}>
              <SiReact className={styles.icon} />
              <p>react</p>
            </div>
          )}
          {project.tech.includes("next") === true && (
            <div className={styles.iconContainer}>
              <SiNextdotjs className={styles.icon} />
              <p>next</p>
            </div>
          )}
          {project.tech.includes("redux") === true && (
            <div className={styles.iconContainer}>
              <SiRedux className={styles.icon} />
              <p>redux</p>
            </div>
          )}
          {project.tech.includes("bootstrap") === true && (
            <div className={styles.iconContainer}>
              <SiBootstrap className={styles.icon} />
              <p>bootstrap</p>
            </div>
          )}
          {project.tech.includes("sass") === true && (
            <div className={styles.iconContainer}>
              <SiSass className={styles.icon} />
              <p>sass</p>
            </div>
          )}
          {project.tech.includes("node") === true && (
            <div className={styles.iconContainer}>
              <SiNodedotjs className={styles.icon} />
              <p>node</p>
            </div>
          )}
          {project.tech.includes("express") === true && (
            <div className={styles.iconContainer}>
              <SiExpress className={styles.icon} />
              <p>express</p>
            </div>
          )}
          {project.tech.includes("mongoose") === true && (
            <div className={styles.iconContainer}>
              <SiMongodb className={styles.icon} />
              <p>mongodb</p>
            </div>
          )}
          {project.tech.includes("jwt") === true && (
            <div className={styles.iconContainer}>
              <SiJsonwebtokens className={styles.icon} />
              <p>jwt</p>
            </div>
          )}
          {project.tech.includes("puppeteer") === true && (
            <div className={styles.iconContainer}>
              <SiPuppeteer className={styles.icon} />
              <p>puppeteer</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.midContainer}>
        <div className={styles.btnContainer}>
          <a
            className={styles.btn}
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live{(project.heroku === true || project.backend) && "*"}
          </a>
          <a
            className={styles.btn}
            href={project.code}
            target="_blank"
            rel="noreferrer"
          >
            {project.backend ? "Front-End Code" : "Code"}
          </a>
          {project.backend && (
            <a
              className={styles.btn}
              href={project.backend}
              target="_blank"
              rel="noreferrer"
            >
              Back-End Code
            </a>
          )}
        </div>
        {project.heroku === true && (
          <i>*Hosted on Heroku, inital load may take a moment.</i>
        )}
        {project.backend && (
          <i>
            *Backend hosted on Heroku, refresh may be required after page load
            for data.
          </i>
        )}
      </div>
      <div className={styles.botContainer}>
        {project.about.map((proj, i) => (
          <p key={i + proj.slice(0, 8)}>{proj}</p>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { projectName: "recipecloud" } },
      { params: { projectName: "specialforcesartdepartment" } },
      { params: { projectName: "pokedex" } },
      { params: { projectName: "introspectiveimages" } },
      { params: { projectName: "milkmaster" } },
      { params: { projectName: "encounterbuddy" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const project = projects.find((proj) => proj.slug === params.projectName);
  return {
    props: {
      project,
    },
  };
};
