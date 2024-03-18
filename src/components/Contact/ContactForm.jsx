// Done
import React from "react";
import { Form } from "react-bootstrap";

const ContactForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder=" " />
            </Form.Group>
        </Form>
    );
};

export default ContactForm;
