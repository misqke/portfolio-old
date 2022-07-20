import React from "react";
import { SkillBox, SkillText, IconBox } from "./styles";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiPuppeteer,
  SiMongodb,
} from "react-icons/si";

const Icon = ({ skill }) => {
  return (
    <SkillBox>
      <IconBox>
        {skill === "HTML" ? (
          <SiHtml5 />
        ) : skill === "CSS" ? (
          <SiCss3 />
        ) : skill === "JavaScript" ? (
          <SiJavascript />
        ) : skill === "Redux" ? (
          <SiRedux />
        ) : skill === "Styled Components" ? (
          <SiStyledcomponents />
        ) : skill === "Node" ? (
          <SiNodedotjs />
        ) : skill === "Express" ? (
          <SiExpress />
        ) : skill === "JWT" ? (
          <SiJsonwebtokens />
        ) : skill === "Puppeteer" ? (
          <SiPuppeteer />
        ) : skill === "MongoDB" ? (
          <SiMongodb />
        ) : (
          <SiReact />
        )}
      </IconBox>
      <SkillText>{skill}</SkillText>
    </SkillBox>
  );
};

export default Icon;
