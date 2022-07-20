import React from "react";
import { HomeText, HomeContent, HomeSpan } from "./styles";

const HomePage = () => {
  return (
    <HomeContent>
      <HomeText size="small">Hello and welcome!</HomeText>
      <HomeText size="large">
        I&apos;m <HomeSpan>Mike</HomeSpan>.
      </HomeText>
      <HomeText>
        I make <HomeSpan>web</HomeSpan> and <HomeSpan>mobile</HomeSpan>{" "}
        applications with <HomeSpan>React</HomeSpan>.
      </HomeText>
    </HomeContent>
  );
};

export default HomePage;
