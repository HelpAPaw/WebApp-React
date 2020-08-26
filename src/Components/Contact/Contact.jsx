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

const Contact = () => {
  const [userEmail, setUserEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const [showSpinner, setShowSpinner] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState();
  const [isValidFeedback, setIsValidFeedback] = useState();

  const [formSubmissionResult, setFormSubmissionResult] = useState(null);

  const clearForm = () => {
    setFeedbackText('');
    setUserEmail('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isValidFeedback && isValidEmail) {
      const payload = {
        'template-name': 'web_feedback_template',
        addresses: ['shingalona@gmail.com'],
        'template-values': { userEmail, textboxValue: feedbackText },
      };

      const headers = {
        'Content-Type': 'application/json',
      };

      setShowSpinner(true);

      try {
        const response = await axios.post(
          `https://api.backendless.com/${process.env.REACT_APP_BACKENDLESS_APP_ID}/${process.env.REACT_APP_BACKENDLESS_API_KEY}/emailtemplate/send`,
          payload,
          { headers }
        );

        if (response.data.status === 'SCHEDULED') {
          setShowSpinner(false);
          setFormSubmissionResult('Form submitted succesfully');
          clearForm();
        }
      } catch (error) {
        setShowSpinner(false);
        setFormSubmissionResult(error);
      }
    } else {
      setFormSubmissionResult(
        'You have not entered one or more details correctly'
      );
    }
  };

  const emailValidator = () => {
    const isAValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(
      userEmail
    );

    setIsValidEmail(isAValidEmail);
  };

  const validateFeedbackText = () => {
    setIsValidFeedback(feedbackText.trim() !== '');
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="name@example.com"
          onChange={(event) => setUserEmail(event.target.value)}
          value={userEmail}
          onBlur={emailValidator}
        />
      </Form.Group>
      {isValidEmail === false && (
        <p data-testid="email-error" style={{ color: 'red' }}>
          Please Enter Valid Email ID
        </p>
      )}

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          onChange={(event) => {
            setFeedbackText(event.target.value);
          }}
          onBlur={validateFeedbackText}
          value={feedbackText}
        />
      </Form.Group>
      {isValidFeedback === false && (
        <p data-testid="feedback-error" style={{ color: 'red' }}>
          Please Enter Your Feedback
        </p>
      )}

      <Button type="submit" onClick={handleSubmit}>
        Submit form
      </Button>

      {showSpinner && <div>Loading...</div>}

      <FormSubmissionMessage>{formSubmissionResult}</FormSubmissionMessage>
    </Form>
  );
};

export default Contact;
