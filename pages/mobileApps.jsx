import { Container, MobilePage, ActionBtn, ActionBtnBox } from "../components";

const MobileApps = () => {
  return (
    <Container>
      <MobilePage />
      <ActionBtnBox>
        <ActionBtn content="My web apps" page="/webApps" />
        <ActionBtn content="Get in touch" page="/contact" />
      </ActionBtnBox>
    </Container>
  );
};

export default MobileApps;
