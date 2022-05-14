import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className={styles.container} id="contact">
      <h3 className={styles.sectionTitle}>Contact me</h3>
      <form
        className={styles.form}
        method="POST"
        data-netlify="true"
        name="contact"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.formHalf}>
          <div
            className={`${styles.formBox} ${
              name.length > 0 ? styles.open : styles.shut
            }`}
          >
            <label htmlFor="contact_name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="contact_name"
              required
            />
          </div>
          <div
            className={`${styles.formBox} ${
              email.length > 0 ? styles.open : styles.shut
            }`}
          >
            <label htmlFor="contact_email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="contact_email"
              required
            />
          </div>
          <div
            className={`${styles.formBox} ${
              subject.length > 0 ? styles.open : styles.shut
            }`}
          >
            <label htmlFor="contact_subject">Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="contact_subject"
              name="subject"
              required
            />
          </div>
        </div>
        <div className={styles.formHalf}>
          <div
            className={`${styles.formBox} ${styles.formArea} ${
              message.length > 0 ? styles.open : styles.shut
            }`}
          >
            <label htmlFor="contact_msg">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              id="contact_msg"
              name="message"
              rows={5}
              cols={8}
              required
            />
          </div>
          <button className={styles.submit} type="submit">
            Send
          </button>
        </div>
        <label style={{ display: "none" }}>
          Dont fill this out if youre human:
          <input name="bot-field" />
        </label>
      </form>
    </div>
  );
};

export default Contact;
