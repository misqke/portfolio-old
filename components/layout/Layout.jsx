import React, { useState } from "react";
import Nav from "./Nav";
import { Page, NavToggle, Body, ToggleBar } from "../../styles/components";
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
        <ToggleBar open={open} />
        <ToggleBar open={open} />
        <ToggleBar open={open} />
        <ToggleBar open={open} />
      </NavToggle>
      <Body>
        {children}
        <CanvasBG theme={theme} mode={mode} hue={hue} />
      </Body>
    </Page>
  );
};

export default Layout;
