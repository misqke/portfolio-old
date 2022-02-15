import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.scss";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.container} ${open && styles.open}`}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <span onClick={() => setOpen(false)}>
            <Link href={"/"}>Home</Link>
          </span>
          <span onClick={() => setOpen(false)}>
            <Link href={"/#about"}>About</Link>
          </span>
          <span onClick={() => setOpen(false)}>
            <Link href={"/#projects"}>Projects</Link>
          </span>
          <span onClick={() => setOpen(false)}>
            <Link href={"/#contact"}>Contact</Link>
          </span>
        </nav>
        <div
          className={styles.toggle_btn}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
