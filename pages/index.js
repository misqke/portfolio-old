import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deactivate } from "../redux/transitionSlice";
import { Container, HomePage, ActionBtn, ActionBtnBox } from "../components";

export default function Home() {
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
    <Container opacity={opacity} scale={scale}>
      <HomePage />
      <ActionBtnBox>
        <ActionBtn content="More about me" page="/about" />
        <ActionBtn content="Get in touch" page="/contact" />
      </ActionBtnBox>
    </Container>
  );
}
