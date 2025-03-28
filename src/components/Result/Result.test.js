import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Result from './index';

test('renders correct message for correct answer', () => {
  render(<Result isCorrect={true} correctAnswer="Correct Answer" onNext={() => {}} isLastQuestion={false} />);
  expect(screen.getByText('Correct!')).toBeInTheDocument();
});

test('renders correct message for incorrect answer', () => {
  render(<Result isCorrect={false} correctAnswer="Correct Answer" onNext={() => {}} isLastQuestion={false} />);
  expect(screen.getByText('Incorrect! The correct answer is: Correct Answer')).toBeInTheDocument();
});

test('calls onNext when the Next button is clicked', () => {
  const handleNext = jest.fn();
  render(<Result isCorrect={true} correctAnswer="Correct Answer" onNext={handleNext} isLastQuestion={false} />);
  fireEvent.click(screen.getByText('Next'));
  expect(handleNext).toHaveBeenCalled();
});

test('renders Finish button for the last question', () => {
  render(<Result isCorrect={true} correctAnswer="Correct Answer" onNext={() => {}} isLastQuestion={true} />);
  expect(screen.getByText('Finish')).toBeInTheDocument();
});
