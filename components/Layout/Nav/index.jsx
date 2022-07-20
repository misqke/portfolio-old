import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { activate } from "../../../redux/transitionSlice";
import {
  NavBar,
  HeaderContainer,
  LinksContainer,
  Title,
  TitleText,
  Toggle,
  NavBtn,
} from "./styles";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavigate = async (page) => {
    setOpen(false);
    await router.push(page);
    dispatch(activate());
  };

  return (
    <NavBar>
      <HeaderContainer open={open}>
        <Title
          onClick={() => handleNavigate("/")}
          disabled={router.asPath === "/"}
        >
          <TitleText>Mike Rust - Developer</TitleText>
        </Title>
        <Toggle open={open} onClick={() => setOpen((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Toggle>
      </HeaderContainer>
      <LinksContainer open={open}>
        <NavBtn
          onClick={() => handleNavigate("/about")}
          disabled={router.asPath === "/about"}
        >
          About
        </NavBtn>
        <NavBtn
          onClick={() => handleNavigate("/webApps")}
          disabled={router.asPath === "/webApps"}
        >
          Web Apps
        </NavBtn>
        <NavBtn
          onClick={() => handleNavigate("/mobileApps")}
          disabled={router.asPath === "/mobileApps"}
        >
          Mobile Apps
        </NavBtn>
        <NavBtn
          onClick={() => handleNavigate("/contact")}
          disabled={router.asPath === "/contact"}
        >
          Contact
        </NavBtn>
      </LinksContainer>
    </NavBar>
  );
};

export default Nav;
