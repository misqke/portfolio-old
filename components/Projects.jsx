import React, { useEffect } from "react";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/Projects.module.scss";
import { projects } from "../projects";

const Projects = () => {
  useEffect(() => {
    const projs = document.querySelectorAll("#projects_wrapper > div");
    console.log(projs);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            `${styles.visible}`,
            entry.isIntersecting
          );
        });
      },
      { threshold: 0.75 }
    );
    projs.forEach((proj) => {
      obs.observe(proj);
    });
  }, []);

  return (
    <div className={styles.container} id="projects">
      <div className={styles.blur}></div>
      <h2>Projects</h2>
      <div className={styles.wrapper} id="projects_wrapper">
        {projects.map((project, i) => (
          <div
            className={styles.project}
            key={i}
            onClick={() => Router.push(`/projects/${project.slug}`)}
          >
            <div className={styles.title}>
              <h6>{project.name}</h6>
            </div>
            <div className={styles.img_container}>
              <Image src={project.img} width={1898} height={889} alt=""></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
