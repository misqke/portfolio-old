import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.blur}></div>
      <h2>Contact</h2>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.inner_container}>
            <h4>Michael Rust</h4>
            <p>
              <a href="mailto: misqke.rust@yahoo.com">misqke.rust@yahoo.com</a>
            </p>
            <Link href="/resume">
              <p className={styles.resume}>Resume</p>
            </Link>
            <div className={styles.icon_box}>
              <div className={styles.icon_wrapper}>
                <a
                  href="https://github.com/misqke"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={"/icons/github_icon.png"}
                    width={256}
                    height={256}
                    alt="github link"
                  ></Image>
                </a>
              </div>
              <div className={styles.icon_wrapper}>
                <a
                  href="https://www.linkedin.com/in/michael-rust-66b5b3226/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={"/icons/linkedin_icon.png"}
                    width={256}
                    height={256}
                    alt="linked in link"
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
