import React, { useState, useEffect } from "react";
import { NavBar, NavToggle, NavBtn, Col } from "../../styles/components";
import useDarkMode from "../useDarkMode";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(-size);
  const [themeToggler] = useDarkMode();
  const [size, setSize] = useState(window.innerWidth > 1200 ? 300 : 250);

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
      <NavToggle onClick={() => setOpen((prev) => !prev)}>X</NavToggle>
      <Col>
        <Link href={"/"} passHref>
          <a>
            <NavBtn>Home</NavBtn>
          </a>
        </Link>
        <Link href={"/about"} passHref>
          <a>
            <NavBtn>About</NavBtn>
          </a>
        </Link>
        <Link href={"/skills"} passHref>
          <a>
            <NavBtn>Skills</NavBtn>
          </a>
        </Link>
        <Link href={"/webProjects"} passHref>
          <a>
            <NavBtn>Web Apps</NavBtn>
          </a>
        </Link>
        <Link href={"/mobileProjects"} passHref>
          <a>
            <NavBtn>Mobile Apps</NavBtn>
          </a>
        </Link>
        <Link href={"/contact"} passHref>
          <a>
            <NavBtn>Contact</NavBtn>
          </a>
        </Link>
      </Col>
    </NavBar>
  );
};

export default Nav;
