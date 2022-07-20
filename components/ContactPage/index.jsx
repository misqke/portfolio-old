import React, { useState } from "react";
import {
  ContactContainer,
  ContactTextContainer,
  ContactText,
  FormContainer,
  Form,
  FormControl,
  Submit,
} from "./styles";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailCheck = new RegExp(/.{3,}@.{2,}\..{2,4}/);
  const validForm =
    name.length > 1 &&
    email.match(emailCheck) &&
    subject.length > 0 &&
    message.length > 5;

  return (
    <ContactContainer>
      <ContactTextContainer>
        <ContactText>Want to learn more about me?</ContactText>
        <ContactText>Comments or questions on my work?</ContactText>
        <ContactText>Interested in hiring me?</ContactText>
        <ContactText large>Let me know!</ContactText>
      </ContactTextContainer>
      <FormContainer>
        <Form
          active={validForm}
          method="POST"
          data-netlify="true"
          name="contact"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormControl active={name.length > 0}>
            <input
              content="Name"
              required
              minLength={2}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </FormControl>
          <FormControl active={email.length > 0}>
            <input
              content="Email"
              required
              type="email"
              pattern=".{3,}@.{2,}\..{2,4}"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </FormControl>
          <FormControl active={subject.length > 0}>
            <input
              required
              content="Subject"
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor="subject">Subject</label>
          </FormControl>
          <FormControl active={message.length > 0}>
            <textarea
              rows={5}
              content="Message"
              required
              minLength={6}
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message">Message</label>
          </FormControl>
          <Submit type="submit" disabled={!validForm}>
            Send
          </Submit>
          <label style={{ display: "none" }}>
            Dont fill this out if youre human:
            <input name="bot-field" />
          </label>
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default ContactPage;
