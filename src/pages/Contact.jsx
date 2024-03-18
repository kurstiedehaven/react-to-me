import React from "react";
import ContactLinks from "../components/Contact/ContactLinks";
import ContactForm from "../components/Contact/ContactForm";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

// import css

const Contact = () => {
  return (
    <Container
      className="vw-vh d-flex justify-content-center align-items-center"
      id="contact"
    >
      <Row className="w-100 row-gap">
        <Col
          lg={5}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="text-center mb-5">
            Let's Connect!
          </h1>
          <div className="contact-link-container">
            <ContactLinks
              link="https://www.github.com/kurstiedehaven"
              title="https://www.github.com/kurstiedehaven"
            >
            </ContactLinks>
            <ContactLinks
              link="https://www.linkedin.com/in/kurstie-dehaven-7a3931249/"
              title="https://www.linkedin.com/in/kurstie-dehaven-7a3931249/"
            >
            </ContactLinks>
            <ContactLinks
              link="mailto:kurstiedehaven@gmail.com"
              title="kurstiedehaven@gmail.com"
            >
            </ContactLinks>
          </div>
        </Col>
        <Col lg={7} className="d-flex justify-content-center">
          <Form
            className="email-form"
            data-netlify="true"
            method="post"
            name="contact-form"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <ContactForm
              id="basic-addon1"
              type="email"
              name="email"
              placeholder="Your Email Address"
            />
            <ContactForm
              className="mt-4"
              id="basic-addon2"
              type="text"
              name="title"
              placeholder="Title"
            />
            <FloatingLabel
              className="mt-4"
              controlId="floatingTextarea2"
              label="Send Me A Message!"
              style={{ color: "grey" }}
            >
              <Form.Control
                required
                as="textarea"
                name="message"
                placeholder="Leave a comment here"
                style={{ height: "180px", resize: "none", color: "#000" }}
              />
            </FloatingLabel>
            <div className="mt-4 d-flex justify-content-center align-items-center">
              <Button className="w-25" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
