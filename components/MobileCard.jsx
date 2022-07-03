import React from "react";
import {
  Col,
  Row,
  Text,
  MobileProject,
  Btn,
  Switch,
  MobileImage,
} from "../styles/components";
import Image from "next/image";

const MobileCard = ({ project }) => {
  return (
    <MobileProject>
      <Text fs={1.25}>{project.name}</Text>
      <Row bg="solid" justify="space-evenly">
        {project.tech.map((t) => (
          <Text color="primary" fs={0.7} key={t}>
            {t}
          </Text>
        ))}
      </Row>
      <Row>
        <MobileImage>
          <Image src={project.img} width={750} height={1334} />
        </MobileImage>
        <Col bg="solid" flex justify="space-between">
          <Col padding=".5em" fs={0.7} flex>
            <Text>{project.desc}</Text>
          </Col>
        </Col>
      </Row>
      <Row>
        <a href={project.live} target="_blank">
          <Btn outline>Expo</Btn>
        </a>
        <a href={project.code} target="_blank">
          <Btn outline>Code</Btn>
        </a>
      </Row>
    </MobileProject>
  );
};

export default MobileCard;
