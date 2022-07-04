import { Col, Text, Span, Row } from "../styles/components";
import useDarkMode from "../components/useDarkMode";

export default function Home() {
  const [theme, themeToggler] = useDarkMode();
  return (
    <Col flex justify={"center"} max="700px" height="100%" gap={"1rem"}>
      <Col padding={"0px"}>
        <Col
          padding={"0px"}
          align={"flex-start"}
          animation={"fadeUp"}
          dur={1000}
        >
          <Text fs={2.25}>
            Hi, I'm <Span weight={"600"}>Mike</Span>,
          </Text>
        </Col>
        <Col
          padding={"0px"}
          align={"flex-start"}
          animation={"fadeUp"}
          dur={1750}
        >
          <Text fs={2.25}>
            I'm a <Span weight={"600"}>React</Span> developer.
          </Text>
        </Col>
      </Col>
      <Col padding={"0px"} align={"flex-start"} animation={"fadeUp"} dur={2500}>
        <Text>
          I make fully responsive web and mobile applications with React and
          React Native. I specialize in front-end development but have
          experience with full-stack applications as well.
        </Text>
      </Col>
    </Col>
  );
}
