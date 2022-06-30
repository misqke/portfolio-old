import React from "react";
import { WebProj, Col, Row, Text, Btn } from "../styles/components";
import Image from "next/image";

const WebCard = ({ project }) => {
  return (
    <WebProj>
      <Text fs={1.25}>{project.name}</Text>
      <Row flex padding={"0px"} bg={"solid"} justify={"center"}>
        <Col padding={"0px"}>
          {project.tech.map((t) => (
            <Col padding={"3px 5px"} textAlign="center" key={project.name + t}>
              <Text color="primary" fs={0.7}>
                {t}
              </Text>
            </Col>
          ))}
        </Col>
        <Col padding={".25rem"} flex>
          <Col flex max={"300px"} padding={".5rem"}>
            <Image src={project.img} width={1920} height={892} />
          </Col>
          <Col padding={"5px"} flex>
            <Text fs={0.65}>{project.desc}</Text>
          </Col>
        </Col>
      </Row>

      <Row wrap="wrap">
        <a href={project.live} target="_blank">
          <Btn fs={".75em"}>Live</Btn>
        </a>
        <a href={project.code} target="_blank">
          <Btn fs={".75em"} outline>
            {project.backend ? "Front-End" : "Code"}
          </Btn>
        </a>
        {project.backend && (
          <a href={project.backend} target="_blank">
            <Btn fs={".75em"} outline>
              Back-End
            </Btn>
          </a>
        )}
      </Row>
    </WebProj>
  );
};

export default WebCard;
