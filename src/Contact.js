import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Contact = () => {
  handleSubmit = () => {};
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button type="submit" onSubmit={handleSubmit}>
        Submit form
      </Button>
    </Form>
  );
};
