import React from "react";
import { WebProj, Col, Row, Text, Btn, LinkA } from "../styles/components";
import Image from "next/image";

const WebCard = ({ project }) => {
  return (
    <WebProj>
      <Text color="primary" weight="bold" fs={1.25}>
        {project.name}
      </Text>
      <Row flex padding={"0px 1rem"} justify={"center"}>
        <Col
          padding={"0px"}
          height={"100%"}
          max={"20%"}
          flex
          bg={"solid"}
          justify={"space-evenly"}
          style={{ margin: "auto" }}
        >
          {project.tech.map((t) => (
            <Col padding={"3px 5px"} textAlign="center" key={project.name + t}>
              <Text fs={0.75} weight="light">
                {t}
              </Text>
            </Col>
          ))}
        </Col>
        <Col gap={".5rem"} padding={".25rem"} max={"80%"} flex>
          <Col flex max={"300px"} padding={".5rem"}>
            <Image src={project.img} width={1920} height={892} />
          </Col>
          <Col textAlign="center" padding={"5px"} bg={"solid"} flex>
            <Text fs={0.85}>{project.desc}</Text>
          </Col>
        </Col>
      </Row>

      <Row wrap="wrap">
        <LinkA flex href={project.live} target="_blank">
          <Btn outline>Live</Btn>
        </LinkA>
        <LinkA flex href={project.code} target="_blank">
          <Btn outline>{project.backend ? "Front-End" : "Code"}</Btn>
        </LinkA>
        {project.backend && (
          <LinkA flex href={project.backend} target="_blank">
            <Btn outline>Back-End</Btn>
          </LinkA>
        )}
      </Row>
    </WebProj>
  );
};

export default WebCard;
