import React from "react";
import { Col, Row, Text } from "../styles/components";
import { SkillRow } from "../components";

const Skills = () => {
  return (
    <Row
      wrap={"wrap"}
      justify={"space-evenly"}
      align={"flex-start"}
      height={"100%"}
      flex
    >
      <Col
        flex
        bg={"trans"}
        width={"50%"}
        max={"600px"}
        min={"320px"}
        gap={"1rem"}
        height={"90vh"}
        overflow={"scroll"}
      >
        <Text color={"primary"} fs={1.75} weight={"550"}>
          Front-End
        </Text>
        <SkillRow
          title={"React"}
          desc={"A JavaScript library for building user interfaces"}
        />
        <SkillRow
          title={"Redux"}
          desc={"A predictable state container for JavaScript applications"}
        />
        <SkillRow
          title={"React Native"}
          desc={"React but for building cross platform mobile applications"}
        />
        <SkillRow
          title={"SASS"}
          desc={
            "The most mature, stable, and powerful professional grade CSS extension language in the world"
          }
        />
        <SkillRow
          title={"Styled Components"}
          desc={"Visual primitives for the component age"}
        />
      </Col>
      <Col
        flex
        bg={"trans"}
        width={"50%"}
        max={"600px"}
        min={"320px"}
        gap={"1rem"}
        height={"90vh"}
        overflow={"scroll"}
      >
        <Text fs={1.75} weight={"550"} color={"primary"}>
          Back-End
        </Text>
        <SkillRow
          title={"Node"}
          desc={
            "A JavaScript runtime designed to build scalable network applications"
          }
        />
        <SkillRow
          title={"Express"}
          desc={"Fast, unopinionated, minimalist web framework for Node"}
        />
        <SkillRow title={"MongoDB"} desc={"A cross-platform NoSQL database"} />
        <SkillRow
          title={"Puppeteer"}
          desc={
            "A high-level API to control Chrome or Chromium over the DevTools Protocol."
          }
        />
      </Col>
    </Row>
  );
};

export default Skills;
