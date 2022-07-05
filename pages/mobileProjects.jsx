import React from "react";
import { Row } from "../styles/components";
import { MobileCard } from "../components";
import { mobile } from "../projects";
import Head from "next/head";

const MobileProjects = () => {
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
        <title>Mike Rust - Mobile Apps</title>
      </Head>
      {mobile.map((project) => (
        <MobileCard key={project.name} project={project} />
      ))}
    </Row>
  );
};

export default MobileProjects;
