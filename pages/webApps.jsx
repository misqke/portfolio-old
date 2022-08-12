import { Container, WebPage, ActionBtn, ActionBtnBox } from "../components";

const WebApps = () => {
  return (
    <Container>
      <WebPage />
      <ActionBtnBox>
        <ActionBtn content="My mobile apps" page="/mobileApps" />
        <ActionBtn content="Get in touch" page="/contact" />
      </ActionBtnBox>
    </Container>
  );
};

export default WebApps;
