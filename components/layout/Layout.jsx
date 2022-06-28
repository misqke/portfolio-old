import React from "react";
import Nav from "./Nav";
import { Page, Col } from "../../styles/components";
import CanvasBG from "./Canvas";

const Layout = ({ children, toggle, theme }) => {
  return (
    <Page>
      <Nav toggle={toggle} theme={theme} />
      <Col flex>
        {children}
        <CanvasBG theme={theme} />
      </Col>
    </Page>
  );
};

export default Layout;
