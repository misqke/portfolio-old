import React from "react";
import Head from "next/head";
import { Row } from "../styles/components";
import { WebCard } from "../components";
import { projects } from "../projects";

const WebProjects = () => {
  return (
    <Row
      padding={"0px"}
      wrap={"wrap"}
      justify={"center"}
      gap={"1.5rem"}
      flex={1}
      animation={"fadeIn"}
      dur={1000}
    >
      <Head>
        <title>Mike Rust - Web Apps</title>
      </Head>
      {projects.map((project) => (
        <WebCard key={project.name} project={project} />
      ))}
    </Row>
  );
};

export default WebProjects;
