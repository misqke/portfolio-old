import React, { useState } from "react";
import styles from "../../styles/layout/Nav.module.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Mike<span>Rust</span>
      </h3>

      <nav className={`${styles.nav} `}>
        <ul className={`${styles.navList} ${isOpen ? styles.open : null}`}>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
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
