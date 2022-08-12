import { Container, AboutPage, ActionBtn, ActionBtnBox } from "../components";

const About = () => {
  return (
    <Container>
      <AboutPage />
      <ActionBtnBox>
        <ActionBtn content="My Web Apps" page="/webApps" />
        <ActionBtn content="My Mobile Apps" page="/mobileApps" />
      </ActionBtnBox>
    </Container>
  );
};

export default About;
