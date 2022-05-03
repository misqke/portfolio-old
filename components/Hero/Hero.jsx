import React from "react";
import styled from "styled-components";
import HeroCanvas from "./HeroCanvas";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroCanvas />
      {/* <HeroContent /> */}
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  width: 100vw;
  max-height: 100vh;
  position: relative;
  overflow: hidden;
`;
