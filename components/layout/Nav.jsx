import React, { useState, useEffect } from "react";
import {
  NavBar,
  NavToggle,
  NavBtn,
  Col,
  ToggleBtn,
  Row,
} from "../../styles/components";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ toggle, theme }) => {
  const [open, setOpen] = useState(false);
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

  const handleClick = () => {
    setOpen(false);
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
      <NavToggle onClick={() => setOpen((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </NavToggle>
      <Row>
        <BsSun style={{ fontSize: "1.25em" }} />
        <ToggleBtn
          mode={theme === "light" ? "0%" : "100%"}
          onClick={() => toggle()}
        />
        <BsMoon style={{ fontSize: "1.25em" }} />
      </Row>
      <Col padding={"0px"}>
        <Link href={"/"} passHref>
          <a>
            <NavBtn
              onClick={() => handleClick("home")}
              active={Router.pathname === "/" ? true : false}
            >
              Home
            </NavBtn>
          </a>
        </Link>
        <Link href={"/skills"} passHref>
          <a>
            <NavBtn
              onClick={() => handleClick("skills")}
              active={Router.pathname === "/skills" ? true : false}
            >
              Skills
            </NavBtn>
          </a>
        </Link>
        <Link href={"/webProjects"} passHref>
          <a>
            <NavBtn
              onClick={() => handleClick("webProjects")}
              active={Router.pathname === "/webProjects" ? true : false}
            >
              Web Apps
            </NavBtn>
          </a>
        </Link>
        <Link href={"/mobileProjects"} passHref>
          <a>
            <NavBtn
              onClick={() => handleClick("mobileProjects")}
              active={Router.pathname === "/mobileProjects" ? true : false}
            >
              Mobile Apps
            </NavBtn>
          </a>
        </Link>
        <Link href={"/about"} passHref>
          <a>
            <NavBtn
              onClick={() => handleClick("about")}
              active={Router.pathname === "/about" ? true : false}
            >
              About
            </NavBtn>
          </a>
        </Link>
        <Link href={"/contact"} passHref>
          <a>
            <NavBtn
              onClick={() => handleClick("contact")}
              active={Router.pathname === "/contact" ? true : false}
            >
              Contact
            </NavBtn>
          </a>
        </Link>
      </Col>
    </NavBar>
  );
};

export default Nav;
