import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

const FormSubmissionMessage = styled.div`
  display: flex;
  padding-top: 20px;
  font-size: 500;
  font-weight: medium;
`;

export const Contact = () => {
  const [textboxValue, setTextboxValue] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [apiResponseStatus, setApiResponseStatus] = useState('null');
  const [beingSubmitted, setBeingSubmitted] = useState(false);

  const clearForm = () => {
    setTextboxValue('');
    setUserEmail('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const payload = {
      'template-name': 'web_feedback_template',
      addresses: ['help.a.paw@outlook.com'],
      'template-values': { userEmail, textboxValue },
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    setBeingSubmitted(true);

    axios
      .post(
        `https://api.backendless.com/${process.env.REACT_APP_BACKENDLESS_APP_ID}/${process.env.REACT_APP_BACKENDLESS_API_KEY}/emailtemplate/send`,
        payload,
        { headers }
      )
      .then((response) => {
        clearForm();
        setApiResponseStatus(response.data.status);
        setBeingSubmitted(false);
      })
      .catch((error) => {
        setBeingSubmitted(false);
      });
  };

  const storeUserEmail = (event) => {
    setUserEmail(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="name@example.com"
          onChange={storeUserEmail}
          value={userEmail}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label tooltip>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          onChange={(event) => {
            setTextboxValue(event.target.value);
            console.log('value', event.target.value);
          }}
          value={textboxValue}
        />
      </Form.Group>
      <Button type="submit" onClick={handleSubmit}>
        Submit form
      </Button>

      {beingSubmitted && <div>Loading...</div>}

      {apiResponseStatus === 'SCHEDULED' && (
        <FormSubmissionMessage>
          Form submitted succesfully
        </FormSubmissionMessage>
      )}
    </Form>
  );
};
