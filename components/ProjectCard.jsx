import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/projects/ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={project.img.large}
        width={1883}
        height={889}
        alt=""
      />
      <div className={styles.card}>
        <h4 className={styles.title}>{project.name}</h4>
        <i className={styles.desc}>{project.desc}</i>

        <Link href={`/projects/${project.slug}`} passHref>
          <a className={styles.btn}>VIEW PROJECT</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
