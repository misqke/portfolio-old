import styled from "styled-components";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

export default function Home() {
  return (
    <Page>
      <Hero />
      <About />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
`;
