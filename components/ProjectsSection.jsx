import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/projects/ProjectSection.module.scss";
import { projects } from "../projects";

const ProjectsSection = () => {
  return (
    <div className={styles.container} id="projects">
      <h3 className={styles.sectionTitle}>My Work</h3>
      <div className={styles.projectCardContainer}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
