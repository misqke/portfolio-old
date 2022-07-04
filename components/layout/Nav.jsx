import React, { useState, useEffect } from "react";
import {
  NavBar,
  NavBtn,
  Col,
  ToggleBtn,
  Row,
  Text,
  ImageContainer,
  SettingsMenu,
} from "../../styles/components";
import { LinkA } from "../../styles/components";
import BgSelector from "../BgSelector";
import ColorSelector from "./ColorSelector";
import { BsSun, BsMoon, BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";
import Portrait from "./Portrait";
import Settings from "./Settings";

const Nav = ({
  toggle,
  theme,
  mode,
  changeMode,
  open,
  close,
  hue,
  changeHue,
}) => {
  const [pos, setPos] = useState(-size);
  const [size, setSize] = useState(window.innerWidth > 1200 ? 300 : 250);
  const [showSettings, setShowSettings] = useState(false);
  const Router = useRouter();

  const handleSettingsClick = () => {
    setShowSettings((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setSize(300);
    } else {
      setSize(250);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setSize(300);
    } else {
      setSize(250);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setPos(0);
    } else {
      setPos(-size);
    }
  }, [open, size]);

  return (
    <NavBar pos={pos} size={size}>
      <Settings click={handleSettingsClick} />
      <SettingsMenu open={showSettings} size={size}>
        <Row padding={"0px"} justify={"center"}>
          <BsSun style={{ fontSize: "1.25em" }} />
          <ToggleBtn
            mode={theme === "light" ? "0%" : "100%"}
            onClick={() => toggle()}
          />
          <BsMoon style={{ fontSize: "1.25em" }} />
        </Row>
        <BgSelector mode={mode} changeMode={changeMode} show={showSettings} />
        <ColorSelector click={changeHue} theme={theme} />
      </SettingsMenu>

      <Col gap={".5rem"} padding={"0px"}>
        <ImageContainer width={size - 100} height={size - 100}>
          <Portrait size={size} theme={theme} />
        </ImageContainer>

        <Col width={"80%"} padding=".5rem" bg="body">
          <Text color={"primary"} weight={"600"}>
            Mike Rust
          </Text>
        </Col>
      </Col>
      <Col padding={"0px"}>
        <Link href={"/"} passHref>
          <LinkA flex>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/" ? true : false}
            >
              Home
            </NavBtn>
          </LinkA>
        </Link>
        <Link href={"/skills"} passHref>
          <LinkA flex>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/skills" ? true : false}
            >
              Skills
            </NavBtn>
          </LinkA>
        </Link>
        <Link href={"/webProjects"} passHref>
          <LinkA flex>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/webProjects" ? true : false}
            >
              Web Apps
            </NavBtn>
          </LinkA>
        </Link>
        <Link href={"/mobileProjects"} passHref>
          <LinkA flex>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/mobileProjects" ? true : false}
            >
              Mobile Apps
            </NavBtn>
          </LinkA>
        </Link>
        <Link href={"/contact"} passHref>
          <LinkA flex>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/contact" ? true : false}
            >
              Contact
            </NavBtn>
          </LinkA>
        </Link>
      </Col>
      <Row justify="center" gap={"2rem"}>
        <LinkA href="mailto: misqke.rust@yahoo.com" width="auto">
          <GrMail style={{ fontSize: "1.5em" }} />
        </LinkA>
        <LinkA
          href="https://www.linkedin.com/in/michael-rust-66b5b3226/"
          target="_blank"
          width="auto"
        >
          <BsLinkedin style={{ fontSize: "1.5em" }} />
        </LinkA>
        <LinkA href="https://github.com/misqke" target="_blank" width="auto">
          <BsGithub style={{ fontSize: "1.5em" }} />
        </LinkA>
      </Row>
    </NavBar>
  );
};

export default Nav;
