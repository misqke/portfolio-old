import React from "react";
import styles from "../styles/Projects.module.scss";

const Projects = ({ projects }) => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.wrapper}></div>
    </div>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  const res = await fetch("/api/projects");
  const data = await res.json();
  return {
    props: {
      projects: data.projects,
    },
  };
};
