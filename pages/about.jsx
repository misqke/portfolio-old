import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deactivate } from "../redux/transitionSlice";
import { Container, AboutPage, ActionBtn, ActionBtnBox } from "../components";

const About = () => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(20);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
      setScale(100);
    }, 250);
    setTimeout(() => {
      dispatch(deactivate());
    }, 450);
  }, []);
  return (
    <Container opacity={opacity} scale={scale}>
      <AboutPage />
      <ActionBtnBox>
        <ActionBtn content="My Web Apps" page="/webApps" />
        <ActionBtn content="My Mobile Apps" page="/mobileApps" />
      </ActionBtnBox>
    </Container>
  );
};

export default About;
