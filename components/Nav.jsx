import React, { useState, useEffect } from "react";
import { NavBar, NavToggle, NavBtn, Col } from "../styles/components";
import useDarkMode from "./useDarkMode";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(-size);
  const [themeToggler] = useDarkMode();
  const [size, setSize] = useState(250);

  const handleResize = (e) => {
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
    console.log("adding");
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("removing");
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
        <Link href={"/about"} passHref>
          <a>
            <NavBtn>About</NavBtn>
          </a>
        </Link>
      </Col>
    </NavBar>
  );
};

export default Nav;
