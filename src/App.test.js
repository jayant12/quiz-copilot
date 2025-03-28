import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the first question and options', () => {
  render(<App />);
  expect(screen.getByText('Question 1/5')).toBeInTheDocument();
  expect(screen.getByText('What is the capital of France?')).toBeInTheDocument();
  expect(screen.getByText('Berlin')).toBeInTheDocument();
  expect(screen.getByText('Madrid')).toBeInTheDocument();
  expect(screen.getByText('Paris')).toBeInTheDocument();
  expect(screen.getByText('Rome')).toBeInTheDocument();
});

test('allows user to select an option and submit', () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText('Paris'));
  fireEvent.click(screen.getByText('Submit'));
  expect(screen.getByText('Correct!')).toBeInTheDocument();
});

test('shows incorrect message and correct answer for wrong submission', () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText('Berlin'));
  fireEvent.click(screen.getByText('Submit'));
  expect(screen.getByText('Incorrect! The correct answer is: Paris')).toBeInTheDocument();
});

test('navigates to the next question after submission', () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText('Paris'));
  fireEvent.click(screen.getByText('Submit'));
  fireEvent.click(screen.getByText('Next'));
  expect(screen.getByText('Question 2/5')).toBeInTheDocument();
  expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
});
