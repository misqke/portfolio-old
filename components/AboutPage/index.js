import React from "react";
import {
  AboutContainer,
  AboutTextContainer,
  AboutText,
  SkillsContainer,
  SkillColumn,
  SkillTitle,
  SkillRow,
} from "./styles";
import Icon from "./Icon";

const FRONTEND = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Styled Components",
  "React Native",
];

const BACKEND = ["Node", "Express", "MongoDB", "JWT", "Puppeteer"];

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutTextContainer>
        <AboutText>
          Hi, I&apos;m Mike, I&apos;m a self taught developer. My focus has been
          on front-end development but my goal is to be a full-stack developer.
          I primarily work with React for web apps and React Native for mobile
          apps. I am also proficient with a number of javascript based back-end
          technologies, such as Node and Express.
        </AboutText>
        <AboutText>
          I&apos;ve always looked at life through logical lenses, which has made
          coding a fantastic fit for me. I&apos;m a quick learner, excellent
          problem solver, and strive for perfection in everything I do.
        </AboutText>
      </AboutTextContainer>
      <SkillsContainer>
        <SkillColumn grow={2}>
          <SkillTitle>Front-End</SkillTitle>
          <SkillRow>
            {FRONTEND.map((skill) => (
              <Icon key={skill} skill={skill} />
            ))}
          </SkillRow>
        </SkillColumn>
        <SkillColumn>
          <SkillTitle>Back-End</SkillTitle>
          <SkillRow>
            {BACKEND.map((skill) => (
              <Icon key={skill} skill={skill} />
            ))}
          </SkillRow>
        </SkillColumn>
      </SkillsContainer>
    </AboutContainer>
  );
};

export default AboutPage;
