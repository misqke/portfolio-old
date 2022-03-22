import React from "react";
import Image from "next/image";
import styles from "../../styles/SingleProject.module.scss";

const SingleProject = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{project.name}</h1>

        <div className={styles.tech_container}>
          <ul>
            {project.tech.map((thing, i) => (
              <li key={i}>{thing}</li>
            ))}
          </ul>
        </div>
        <div className={styles.img_container}>
          <Image src={project.img} alt="" width={1898} height={889}></Image>
        </div>
        <p className={styles.desc}>
          <em>{project.desc}</em>
        </p>
        <div className={styles.btn_container}>
          <a href={project.live} target="_blank" rel="noreferrer">
            <button type="button" className={styles.btn}>
              {`Live${project.heroku === true ? "*" : ""}`}
            </button>
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            <button type="button" className={styles.btn}>
              {project.backend ? "Front End" : "Code"}
            </button>
          </a>
          {project.backend && (
            <a href={project.backend} target="_blank" rel="noreferrer">
              <button type="button" className={styles.btn}>
                Back End
              </button>
            </a>
          )}
        </div>
        {project.heroku === true && (
          <p style={{ color: "#898989" }}>
            * Heroku app, initial load may take a moment.
          </p>
        )}
        {project.about.map((stuff, i) => (
          <p className={styles.about_project} key={i}>
            {stuff}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://mikerustportfolio.com/api/projects/?slug=${params.projectName}`
  );
  const data = await res.json();
  return {
    props: {
      project: data.project,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectName: "recipecloud" } },
      { params: { projectName: "encounterbuddy" } },
      { params: { projectName: "milkmaster" } },
      { params: { projectName: "mastermind" } },
      { params: { projectName: "specialforcesartdepartment" } },
      { params: { projectName: "pokedex" } },
    ],
    fallback: false,
  };
}
