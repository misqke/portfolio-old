import React, { useState, useRef } from "react";
import styles from "../styles/ContactForm.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef();

  return (
    <form
      method="POST"
      className={styles.form}
      data-netlify="true"
      name="contact"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className={styles.form_box}>
        <label htmlFor="contact_name" className={styles.form_label}>
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className={`${styles.form_input} ${name.length > 0 && styles.open}`}
          id="contact_name"
          required
        />
      </div>
      <div className={styles.form_box}>
        <label htmlFor="contact_email" className={styles.form_label}>
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className={`${styles.form_input} ${email.length > 0 && styles.open}`}
          id="contact_email"
          required
        />
      </div>
      <div className={styles.form_box}>
        <label htmlFor="contact_subject" className={styles.form_label}>
          Subject
        </label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          className={`${styles.form_input} ${
            subject.length > 0 && styles.open
          }`}
          id="contact_subject"
          name="subject"
          required
        />
      </div>
      <div className={styles.form_box}>
        <label htmlFor="contact_msg" className={styles.form_label}>
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className={`${styles.form_input} ${styles.form_input_area} ${
            message.length > 0 && styles.open
          }`}
          id="contact_msg"
          name="message"
          rows={5}
          required
        />
      </div>
      <button className={styles.form_btn} type="submit">
        Send
      </button>
      <label style={{ display: "none" }}>
        Dont fill this out if youre human:
        <input name="bot-field" />
      </label>
    </form>
  );
};

export default ContactForm;
