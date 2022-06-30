import React from "react";
import { WebProj, Col, Row, Text, Btn, Switch } from "../styles/components";
import Image from "next/image";

const WebCard = ({ project }) => {
  return (
    <WebProj>
      <Text>{project.name}</Text>
      <Row flex padding={".25rem 0"} bg={"solid"} justify={"center"}>
        <Col>
          {project.tech.map((t) => (
            <Col padding={"3px 5px"}>
              <Text color="primary" fs={0.5} key={project.name + t}>
                {t}
              </Text>
            </Col>
          ))}
        </Col>
        <Switch flex={1}>
          <Col flex padding={".5rem"}>
            <Image src={project.img.large} width={1920} height={892} />
          </Col>
          <Col padding={"5px"} flex>
            <Text fs={0.65}>{project.desc}</Text>
          </Col>
        </Switch>
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
