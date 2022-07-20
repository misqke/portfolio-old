import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deactivate } from "../redux/transitionSlice";
import { Container, MobilePage, ActionBtn, ActionBtnBox } from "../components";

const MobileApps = () => {
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
      <MobilePage />
      <ActionBtnBox>
        <ActionBtn content="My web apps" page="/webApps" />
        <ActionBtn content="Get in touch" page="/contact" />
      </ActionBtnBox>
    </Container>
  );
};

export default MobileApps;
