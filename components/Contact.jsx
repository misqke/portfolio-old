import React from "react";
import Image from "next/image";
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
              email:{" "}
              <a href="mailto: misqke.rust@yahoo.com">misqke.rust@yahoo.com</a>
            </p>
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
          <form
            method="post"
            className={styles.form}
            data-netlify="true"
            name="contact"
            netlify-honeypot="bot-field"
          >
            <label style={{ display: "none" }}>
              Dont fill this out if youre human:
              <input name="bot-field" />
            </label>
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.form_box}>
              <label htmlFor="contact_name" className={styles.form_label}>
                Name
              </label>
              <input
                type="text"
                className={styles.form_input}
                id="contact_name"
                placeholder="name"
                required
              />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="contact_email" className={styles.form_label}>
                Email
              </label>
              <input
                type="email"
                className={styles.form_input}
                id="contact_email"
                placeholder="email"
                required
              />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="contact_subject" className={styles.form_label}>
                Subject
              </label>
              <input
                type="text"
                className={styles.form_input}
                id="contact_subject"
                placeholder="subject"
                required
              />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="contact_msg" className={styles.form_label}>
                Message
              </label>
              <textarea
                type="text"
                className={styles.form_input}
                id="contact_msg"
                rows={10}
                placeholder="message"
                required
              />
            </div>
            <button className={styles.form_btn} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
