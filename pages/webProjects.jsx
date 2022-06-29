import React from "react";
import Image from "next/image";
import { Col, Row, Text, Laptop } from "../styles/components";
import { projects } from "../projects";

const WebProjects = () => {
  return (
    <Col flex>
      <Row flex={1} wrap={"wrap"}>
        {projects.map((project) => (
          <Col bg={"trans"} min={"45%"} max={"45%"}>
            <Row>
              <Image width={"660px"} height={"396px"} src={"/laptop.png"} />
              <Col min={"50%"} bg={"solid"} flex justify={"space-between"}>
                <Text>{project.name}</Text>
                <Text>{project.desc}</Text>
              </Col>
            </Row>
            <Row>dghsfghjdj</Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default WebProjects;
