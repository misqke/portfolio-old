import React, { useRef } from "react";
import { Screen, Body } from "./styles";
import Nav from "./Nav";
import LightSpeed from "./LightSpeed";
import { useRouter } from "next/router";

import Head from "next/head";

const Layout = ({ children }) => {
  const bodyRef = useRef();
  const router = useRouter();

  const handleNav = async (page) => {
    router.push(page);
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
