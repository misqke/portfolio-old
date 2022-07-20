import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deactivate } from "../redux/transitionSlice";
import { Container, ContactPage } from "../components";

const Contact = () => {
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
  }, [dispatch]);
  return (
    <Container scale={scale} opacity={opacity}>
      <ContactPage />
    </Container>
  );
};

export default Contact;
