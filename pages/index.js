import { Container, HomePage, ActionBtn, ActionBtnBox } from "../components";

export default function Home() {
  return (
    <Container>
      <HomePage />
      <ActionBtnBox>
        <ActionBtn content="More about me" page="/about" />
        <ActionBtn content="Get in touch" page="/contact" />
      </ActionBtnBox>
    </Container>
  );
}
