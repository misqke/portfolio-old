import React, { useRef } from "react";
import { Screen, Body } from "./styles";
import Nav from "./Nav";
import LightSpeed from "./LightSpeed";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { activate } from "../../redux/transitionSlice";
import Head from "next/head";

const Layout = ({ children }) => {
  const bodyRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNav = async (page) => {
    await router.push(page);
    dispatch(activate());
    bodyRef.current.scrollTo({ top: 0 });
  };

  return (
    <Screen>
      <Head>
        <title>Mike Rust Portfolio</title>
      </Head>
      <Nav handleNav={handleNav} />
      <Body ref={bodyRef}>{children}</Body>
      <LightSpeed />
    </Screen>
  );
};

export default Layout;
