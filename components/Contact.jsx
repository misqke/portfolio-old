import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const handleFormChange = (field) => {
    return (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

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
                <a href="https://github.com/misqke" target="_blank">
                  <Image
                    src={"/icons/github_icon.png"}
                    width={256}
                    height={256}
                  ></Image>
                </a>
              </div>
              <div className={styles.icon_wrapper}>
                <a
                  href="https://www.linkedin.com/in/michael-rust-66b5b3226/"
                  target="_blank"
                >
                  <Image
                    src={"/icons/linkedin_icon.png"}
                    width={256}
                    height={256}
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <form onSubmit={(e) => handlesubmit(e)} className={styles.form}>
            <div className={styles.form_box}>
              <label htmlFor="contact_name" className={styles.form_label}>
                Name
              </label>
              <input
                type="text"
                className={styles.form_input}
                id="contact_name"
                placeholder="name"
                value={formData.name}
                onChange={handleFormChange("name")}
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
                value={formData.email}
                onChange={handleFormChange("email")}
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
                value={formData.subject}
                onChange={handleFormChange("subject")}
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
                value={formData.msg}
                onChange={handleFormChange("msg")}
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
