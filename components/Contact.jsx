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
          <div className={`${styles.formBox}`}>
            <label htmlFor="contact_name">Name</label>
            <input
              className={`${styles.formInput} ${
                name.length > 0 ? styles.open : null
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="contact_name"
              required
            />
          </div>
          <div className={`${styles.formBox}`}>
            <label htmlFor="contact_email">Email</label>
            <input
              className={`${styles.formInput} ${
                email.length > 0 ? styles.open : null
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="contact_email"
              required
            />
          </div>
          <div className={`${styles.formBox}`}>
            <label htmlFor="contact_subject">Subject</label>
            <input
              className={`${styles.formInput} ${
                subject.length > 0 ? styles.open : null
              }`}
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
          <div className={`${styles.formArea}`}>
            <label htmlFor="contact_msg">Message</label>
            <textarea
              className={`${styles.formTextArea} ${
                message.length > 0 ? styles.open : null
              }`}
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
