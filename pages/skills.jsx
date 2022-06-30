import React from "react";
import { Col, Row, Text } from "../styles/components";
import { SkillRow } from "../components";

const colMax = undefined;
const colMin = "300px";

const Skills = () => {
  return (
    <Row
      wrap={"wrap"}
      justify={"space-evenly"}
      height={"100%"}
      align={"flex-start"}
      flex
    >
      <Col
        animation={"slideDown"}
        dur={500}
        flex
        bg={"trans"}
        max={colMax}
        min={colMin}
        gap={"1rem"}
        // height={"100%"}
        // overflow={"scroll"}
      >
        <Text color={"primary"} fs={1.75} weight={"550"}>
          Front-End
        </Text>
        <SkillRow
          title={"React"}
          desc={
            "A JavaScript library for building user interfaces. React is my go to front-end library."
          }
        />
        <SkillRow
          title={"Redux"}
          desc={
            "A predictable state container for JavaScript applications.  I use Redux Toolkit in all my applications with complex state."
          }
        />
        <SkillRow
          title={"Next"}
          desc={
            "My framework of choice for building React applications. Static and server side rendering, built in routing and api, and so much more. Why use anything else?"
          }
        />
        <SkillRow
          title={"SASS"}
          desc={
            "The most mature, stable, and powerful CSS extension language in the world. I prefer using SCSS over most CSS libraries."
          }
        />
        <SkillRow
          title={"Styled Components"}
          desc={
            "Visual primitives for the component age. A JavaScript library for creating and styling components that I am becoming increasingly fond of."
          }
        />
      </Col>
      <Col
        animation={"slideDown"}
        dur={750}
        flex
        bg={"trans"}
        max={colMax}
        min={colMin}
        gap={"1rem"}
        // height={"100%"}
        // overflow={"scroll"}
      >
        <Text fs={1.75} weight={"550"} color={"primary"}>
          Back-End
        </Text>
        <SkillRow
          title={"Node"}
          desc={
            "A JavaScript runtime designed to build scalable network applications."
          }
        />
        <SkillRow
          title={"Express"}
          desc={
            "Fast, unopinionated, minimalist web framework for Node. Express makes setting up back-ends with JavaScript quick and easy."
          }
        />
        <SkillRow
          title={"MongoDB"}
          desc={
            "A cross-platform NoSQL database. I use the Mongoose library to integrate MongoDB with my Next or Express back-ends."
          }
        />
        <SkillRow
          title={"Puppeteer"}
          desc={
            "A high-level API to control Chrome or Chromium over the DevTools Protocol. I've built a number of web scrapers for gathering data and automating repetative web tasks."
          }
        />
      </Col>
      <Col
        animation={"slideDown"}
        dur={1000}
        flex
        bg={"trans"}
        max={colMax}
        min={colMin}
        gap={"1rem"}
        // height={"100%"}
        // overflow={"scroll"}
      >
        <Text fs={1.75} weight={"550"} color={"primary"}>
          Mobile
        </Text>
        <SkillRow
          title={"React Native"}
          desc={
            "React but for building cross platform mobile applications. I build all my mobile projects with React Native."
          }
        />
        <SkillRow
          title={"Expo"}
          desc={
            "Framework for building React Native applications. Expo takes all the work out of setting up a mobile project."
          }
        />
        <SkillRow
          title={"Reanimated"}
          desc={
            "A library to simplify and increase the flexability of React Native's Animated API. Reanimated makes handling complex animations quick and easy and has great support for gesture based interactions."
          }
        />
        <SkillRow
          title={"React Navigation"}
          desc={
            "Routing and navigation for Expo and React Native applications. I use React Navigation for all my multi-page mobile applications."
          }
        />
      </Col>
    </Row>
  );
};

export default Skills;
