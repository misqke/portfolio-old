import { Col, Text, Span, Row } from "../styles/components";
import Head from "next/head";

export default function Home() {
  return (
    <Col flex align="center">
      <Head>
        <title>Mike Rust - Portfolio</title>
      </Head>
      <Col
        padding={"0.5rem"}
        align={"center"}
        textAlign={"center"}
        animation={"fadeUp"}
        dur={2500}
        width="fit-content"
        bg="trans"
        style={{
          position: "absolute",
          bottom: "10%",
        }}
      >
        <Text>
          I make fully responsive web and mobile applications with React and
          React Native. I specialize in front-end development but have
          experience with full-stack applications as well.
        </Text>
      </Col>

      <Col flex justify={"center"} max="700px" height="100%" gap={"1rem"}>
        <Col padding={"0px"}>
          <Col
            padding={"0px"}
            align={"flex-start"}
            animation={"fadeUp"}
            dur={1000}
          >
            <Text fs={2.5}>
              Hi, I&apos;m <Span weight={"bold"}>Mike</Span>,
            </Text>
          </Col>
          <Col
            padding={"0px"}
            align={"flex-start"}
            animation={"fadeUp"}
            dur={1750}
          >
            <Text fs={2.5}>
              I&apos;m a <Span weight={"bold"}>React</Span> developer.
            </Text>
          </Col>
        </Col>
      </Col>
    </Col>
  );
}
