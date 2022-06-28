import React, { useState } from "react";
import Nav from "./Nav";
import { Page, Col } from "../../styles/components";
import CanvasBG from "./Canvas";

const Layout = ({ children, toggle, theme }) => {
  const [bgMode, setBgMode] = useState("pop");

  const handleBgChange = (mode) => {
    setBgMode(mode);
  };

  return (
    <Page>
      <Nav
        toggle={toggle}
        theme={theme}
        mode={bgMode}
        changeMode={handleBgChange}
      />
      <Col height={"100vh"} flex overflow={"scroll"}>
        {children}
        <CanvasBG theme={theme} mode={bgMode} />
      </Col>
    </Page>
  );
};

export default Layout;
