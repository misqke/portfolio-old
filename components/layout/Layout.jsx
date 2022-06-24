import React from "react";
import Nav from "./Nav";
import { Page } from "../../styles/components";

const Layout = ({ children }) => {
  return (
    <Page>
      <Nav />
      {children}
    </Page>
  );
};

export default Layout;
