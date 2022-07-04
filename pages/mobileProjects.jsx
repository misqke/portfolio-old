import React from "react";
import { Col, Row, Text } from "../styles/components";
import { MobileCard } from "../components";
import { mobile } from "../projects";

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
      {mobile.map((project) => (
        <MobileCard key={project.name} project={project} />
      ))}
    </Row>
  );
};

export default MobileProjects;
