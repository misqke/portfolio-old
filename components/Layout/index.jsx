import React from "react";
import { Screen, Body } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import LightSpeed from "./LightSpeed";

const Layout = ({ children }) => {
  const transition = useSelector((state) => state.transition);

  return (
    <Screen>
      <Nav />
      <Body>{children}</Body>
      <LightSpeed />
    </Screen>
  );
};

export default Layout;
