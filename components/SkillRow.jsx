import React from "react";
import { Row, Col, Text, Span } from "../styles/components";
import {
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiSass,
  SiExpress,
  SiMongodb,
  SiPuppeteer,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const SkillRow = ({ title, desc }) => {
  return (
    <Row flex bg={"solid"} width={"100%"}>
      <Col width={"90px"} min={"90px"} textAlign={"center"}>
        <Span fs={2}>
          {title === "React" || title === "React Native" ? (
            <SiReact />
          ) : title === "Redux" ? (
            <SiRedux />
          ) : title === "Styled Components" ? (
            <SiStyledcomponents />
          ) : title === "SASS" ? (
            <SiSass />
          ) : title === "Node" ? (
            <FaNodeJs />
          ) : title === "Express" ? (
            <SiExpress />
          ) : title === "MongoDB" ? (
            <SiMongodb />
          ) : title === "Puppeteer" ? (
            <SiPuppeteer />
          ) : (
            <div></div>
          )}
        </Span>
        <Text fs={0.8} color={"primary"}>
          {title}
        </Text>
      </Col>
      <Row flex height={"100%"}>
        <Text>{desc}</Text>
      </Row>
    </Row>
  );
};

export default SkillRow;
