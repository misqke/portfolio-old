import React from "react";
import styles from "../styles/ContactForm.module.scss";

const ContactForm = () => {
  return (
    <form
      method="post"
      className={styles.form}
      data-netlify="true"
      name="contact"
      netlify-honeypot="bot-field"
      action="/#contact"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className={styles.form_box}>
        <label htmlFor="contact_name" className={styles.form_label}>
          Name
        </label>
        <input
          type="text"
          name="name"
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
          name="email"
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
          name="subject"
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
          name="message"
          rows={10}
          placeholder="message"
          required
        />
      </div>
      <button className={styles.form_btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
