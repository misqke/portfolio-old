import React, { useState } from "react";
import Head from "next/dist/shared/lib/head";
import { Form, Col, FormBox, Btn, Text } from "../styles/components";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Col gap={"1rem"} justify={"space-evenly"} flex>
      <Head>
        <title>Mike Rust - Contact</title>
      </Head>
      <Col
        textAlign="center"
        bg={"trans"}
        width={"auto"}
        animation={"fadeIn"}
        dur={750}
      >
        <Text fs={1.25}>
          Like my work? Want to hire me? Comments or questions?
        </Text>
        <Text fs={1.25} color="primary" weight="bold">
          {" "}
          Let me know!
        </Text>
      </Col>
      <Col animation={"slideUp"} dur={750}>
        <Form
          method="POST"
          data-netlify="true"
          name="contact"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormBox>
            <label htmlFor="name">Name</label>
            <input
              required
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormBox>
          <FormBox>
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormBox>
          <FormBox>
            <label htmlFor="subject">Subject</label>
            <input
              required
              id="subject"
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormBox>
          <FormBox>
            <label htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              rows={6}
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormBox>
          <Btn type="submit" outline>
            Send
          </Btn>
          <label style={{ display: "none" }}>
            Dont fill this out if youre human:
            <input name="bot-field" />
          </label>
        </Form>
      </Col>
    </Col>
  );
};

export default Contact;
