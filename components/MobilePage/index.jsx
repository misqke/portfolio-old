import React from "react";
import { mobile } from "../../projects";
import { MobileBox, MobileImg, MobileCard, MobileContainer } from "./styles";
import {
  WebTitle,
  WebTech,
  WebBody,
  WebDesc,
  WebBtnBox,
  WebTechTag,
} from "../WebPage/styles";
import { Btn } from "..";
import Image from "next/image";

const MobilePage = () => {
  return (
    <MobileContainer>
      {mobile.map((proj, i) => (
        <MobileCard key={proj.slug}>
          <WebTitle>{proj.name}</WebTitle>
          <WebTech>
            {proj.tech.map((tech) => (
              <WebTechTag key={tech}>{tech}</WebTechTag>
            ))}
          </WebTech>
          <WebBody>
            <MobileImg>
              <Image src={proj.img} width={750} height={1334} />
            </MobileImg>
            <MobileBox>
              <WebDesc>{proj.desc}</WebDesc>
              <WebBtnBox>
                <Btn href={proj.live} target="_blank">
                  Expo
                </Btn>
                <Btn href={proj.code} target="_blank">
                  Code
                </Btn>
              </WebBtnBox>
            </MobileBox>
          </WebBody>
        </MobileCard>
      ))}
    </MobileContainer>
  );
};

export default MobilePage;
