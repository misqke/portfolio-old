import React from "react";
import {
  Col,
  Row,
  Text,
  MobileProject,
  Btn,
  MobileImage,
  LinkA,
} from "../styles/components";
import Image from "next/image";

const MobileCard = ({ project }) => {
  return (
    <MobileProject>
      <Text color="primary" weight="bold" fs={1.25} shadow="body">
        {project.name}
      </Text>
      <Row bg="solid" justify="space-evenly">
        {project.tech.map((t) => (
          <Text fs={0.7} key={t}>
            {t}
          </Text>
        ))}
      </Row>
      <Row>
        <MobileImage>
          <Image
            src={project.img}
            alt={project.name}
            width={750}
            height={1334}
          />
        </MobileImage>
        <Col bg="solid" flex justify="space-between">
          <Col textAlign={"center"} padding=".5em" fs={0.7} flex>
            <Text weight="light">{project.desc}</Text>
          </Col>
        </Col>
      </Row>
      <Row>
        <LinkA flex href={project.live} target="_blank">
          <Btn outline>Expo</Btn>
        </LinkA>
        <LinkA flex href={project.code} target="_blank">
          <Btn outline>Code</Btn>
        </LinkA>
      </Row>
    </MobileProject>
  );
};

export default MobileCard;
