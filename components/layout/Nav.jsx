import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/layout/Nav.module.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <h3 className={styles.title}>
          Mike<span>Rust</span>
        </h3>
      </Link>

      <nav className={`${styles.nav} `}>
        <ul className={`${styles.navList} ${isOpen ? styles.open : null}`}>
          <li>
            <Link href="/#about" passHref>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects" passHref>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href={"/#contact"} passHref>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={() => handleNavToggle()}>
        <span className={`${styles.line} ${styles.top}`}></span>
        <span className={`${styles.line} ${styles.mid}`}></span>
        <span className={`${styles.line} ${styles.bot}`}></span>
      </div>
    </div>
  );
};

export default Nav;
