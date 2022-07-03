import React, { useState, useEffect } from "react";
import {
  NavBar,
  NavToggle,
  NavBtn,
  Col,
  ToggleBtn,
  Row,
  Text,
  ImageContainer,
} from "../../styles/components";
import BgSelector from "../BgSelector";
import ColorSelector from "./ColorSelector";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
  const Router = useRouter();

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
      <Col gap={".5rem"}>
        <ImageContainer width={size - 100} height={size - 100}>
          <Image
            src={"/me.png"}
            width={450}
            height={600}
            objectPosition={"center"}
          />
        </ImageContainer>
        <Col padding=".5rem" bg="body">
          <Text color={"primary"} weight={"600"}>
            Mike Rust
          </Text>
        </Col>
      </Col>

      <Col padding={"0px"}>
        <Link href={"/"} passHref>
          <a>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/" ? true : false}
            >
              Home
            </NavBtn>
          </a>
        </Link>
        <Link href={"/skills"} passHref>
          <a>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/skills" ? true : false}
            >
              Skills
            </NavBtn>
          </a>
        </Link>
        <Link href={"/webProjects"} passHref>
          <a>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/webProjects" ? true : false}
            >
              Web Apps
            </NavBtn>
          </a>
        </Link>
        <Link href={"/mobileProjects"} passHref>
          <a>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/mobileProjects" ? true : false}
            >
              Mobile Apps
            </NavBtn>
          </a>
        </Link>
        <Link href={"/contact"} passHref>
          <a>
            <NavBtn
              onClick={() => close()}
              active={Router.pathname === "/contact" ? true : false}
            >
              Contact
            </NavBtn>
          </a>
        </Link>
      </Col>
      <Col>
        <Row justify={"center"}>
          <BsSun style={{ fontSize: "1.25em" }} />
          <ToggleBtn
            mode={theme === "light" ? "0%" : "100%"}
            onClick={() => toggle()}
          />
          <BsMoon style={{ fontSize: "1.25em" }} />
        </Row>
        <BgSelector mode={mode} changeMode={changeMode} />
        <ColorSelector click={changeHue} theme={theme} />
      </Col>
    </NavBar>
  );
};

export default Nav;
