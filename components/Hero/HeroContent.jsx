import React from "react";
import styled from "styled-components";

const HeroContent = () => {
  return (
    <Container>
      <Content>
        <Text>Mike Rust</Text>
        <Line />
        <Text>Web Developer</Text>
      </Content>
    </Container>
  );
};

export default HeroContent;

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: #0002;
  padding: 1em;
  border-radius: 8px;
  backdrop-filter: blur(5px);
`;

const Text = styled.h3`
  font-size: 2.5em;
  color: #000;
`;

const Line = styled.div`
  width: 100%;
  min-height: 2px;
  background: #000;
`;
