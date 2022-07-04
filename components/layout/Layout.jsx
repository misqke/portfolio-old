import React, { useState } from "react";
import Nav from "./Nav";
import { Page, NavToggle, Body } from "../../styles/components";
import CanvasBG from "./Canvas";

const Layout = ({
  children,
  toggle,
  theme,
  hue,
  changeHue,
  mode,
  changeMode,
}) => {
  const [open, setOpen] = useState(false);

  const closeNav = () => {
    setOpen(false);
  };

  const handleBgChange = (mode) => {
    setBgMode(mode);
  };

  return (
    <Page>
      <Nav
        toggle={toggle}
        theme={theme}
        mode={mode}
        changeMode={changeMode}
        open={open}
        close={closeNav}
        changeHue={changeHue}
        hue={hue}
      />
      <NavToggle onClick={() => setOpen((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </NavToggle>
      <Body>
        {children}
        <CanvasBG theme={theme} mode={mode} hue={hue} />
      </Body>
    </Page>
  );
};

export default Layout;
