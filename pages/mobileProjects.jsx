import React from "react";
import { Col, Row, Text } from "../styles/components";
import { MobileCard } from "../components";
import { mobile } from "../projects";

const MobileProjects = () => {
  return (
    <Col
      animation={"fadeIn"}
      dur={1000}
      flex
      padding={"1rem .5rem"}
      overflow="scroll"
    >
      <Row
        padding={"0px"}
        wrap={"wrap"}
        justify={"center"}
        gap={"1.5rem"}
        flex={1}
      >
        {mobile.map((project) => (
          <MobileCard key={project.name} project={project} />
        ))}
      </Row>
    </Col>
  );
};

export default MobileProjects;
