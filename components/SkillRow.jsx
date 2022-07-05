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
  SiNextdotjs,
  SiExpo,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GiMeepleCircle } from "react-icons/gi";

const SkillRow = ({ title, desc }) => {
  return (
    <Row flex={1} bg={"solid"} width={"100%"}>
      <Col width={"90px"} min={"90px"} textAlign={"center"} flex={1}>
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
          ) : title === "Next" ? (
            <SiNextdotjs />
          ) : title === "Expo" ? (
            <SiExpo />
          ) : title === "React Navigation" ? (
            <GiMeepleCircle />
          ) : (
            <SiReact />
          )}
        </Span>
        <Col flex={2}>
          <Text fs={0.8} color={"primary"}>
            {title}
          </Text>
        </Col>
      </Col>
      <Row flex height={"100%"}>
        <Text weight="light">{desc}</Text>
      </Row>
    </Row>
  );
};

export default SkillRow;
