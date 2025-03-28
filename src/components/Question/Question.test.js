import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from './index';

test('renders the question number and text', () => {
  render(<Question question="What is the capital of France?" current={1} total={5} />);
  expect(screen.getByText('Question 1/5')).toBeInTheDocument();
  expect(screen.getByText('What is the capital of France?')).toBeInTheDocument();
});
