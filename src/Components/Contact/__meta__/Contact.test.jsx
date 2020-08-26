import { fireEvent, render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import Contact from '../Contact';
import mockSubmitFeedbackSuccessResponse from './Contact.fixtures';

jest.mock('axios');

describe('feedback form', () => {
  it('calls the onSubmit function', () => {
    const resp = { data: mockSubmitFeedbackSuccessResponse };
    axios.post.mockResolvedValue(resp);

    const { getByLabelText, findByText, getByText } = render(<Contact />);

    fireEvent.change(getByLabelText('Email address'), {
      target: { value: 'savithri0707@gmail.com' },
    });

    fireEvent.blur(getByLabelText('Email address'));

    fireEvent.change(getByLabelText('Feedback'), {
      target: { value: 'testing feedback form' },
    });

    fireEvent.blur(getByLabelText('Feedback'));

    fireEvent.click(getByText('Submit form'));

    expect(findByText('Form submitted succesfully'));
  });

  it('should throw an error with invalid email', () => {
    const { getByLabelText, getByText } = render(<Contact />);

    fireEvent.change(getByLabelText('Email address'), {
      target: { value: 'gmail' },
    });

    fireEvent.blur(getByLabelText('Email address'));

    expect(getByText('Please Enter Valid Email ID')).toBeInTheDocument();
  });

  it('should throw error when feedback textbox is empty', () => {
    const { getByLabelText, getByText } = render(<Contact />);

    fireEvent.change(getByLabelText('Feedback'), {
      target: { value: '' },
    });

    fireEvent.blur(getByLabelText('Feedback'));

    expect(getByText('Please Enter Your Feedback')).toBeInTheDocument();
  });

  it("should show an error if one or more field is empty or doesn't align to the rules", () => {
    const { getByLabelText, findByText, getByText } = render(<Contact />);

    fireEvent.change(getByLabelText('Email address'), {
      target: { value: 'shingalona@gmail.com' },
    });

    fireEvent.change(getByLabelText('Feedback'), {
      target: { value: '' },
    });

    fireEvent.click(getByText('Submit form'));

    expect(findByText('You have not entered one or more details correctly'));
  });
});
