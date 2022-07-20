import React from "react";
import {
  WebContainer,
  WebCard,
  WebTitle,
  WebTech,
  WebBody,
  WebImg,
  WebDesc,
  WebBtnBox,
  WebTechTag,
} from "./styles";
import { Btn } from "..";
import { web } from "../../projects";
import Image from "next/image";

const WebPage = () => {
  return (
    <WebContainer>
      {web.map((proj, i) => (
        <WebCard key={proj.slug}>
          <WebTitle>{proj.name}</WebTitle>
          <WebTech>
            {proj.tech.map((tech) => (
              <WebTechTag key={tech}>{tech}</WebTechTag>
            ))}
          </WebTech>
          <WebBody reverse={i % 2 !== 0}>
            <WebImg>
              <Image src={proj.img} width={1900} height={892} alt={proj.name} />
            </WebImg>
            <WebDesc>{proj.desc}</WebDesc>
            <WebBtnBox>
              <Btn href={proj.live} target="_blank">
                Live
              </Btn>
              <Btn href={proj.code} target="_blank">
                {proj.backend ? "Front-End Code" : "Code"}
              </Btn>
              {proj.backend && (
                <Btn target="_blank" href={proj.backend}>
                  Back-End Code
                </Btn>
              )}
            </WebBtnBox>
          </WebBody>
        </WebCard>
      ))}
    </WebContainer>
  );
};

export default WebPage;
