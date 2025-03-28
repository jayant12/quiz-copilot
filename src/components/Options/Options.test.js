import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Options from './index';

test('renders all options', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  render(<Options options={options} selectedOption="" onOptionChange={() => {}} showResult={false} correctAnswer="" />);
  options.forEach(option => {
    expect(screen.getByText(option)).toBeInTheDocument();
  });
});

test('calls onOptionChange when an option is selected', () => {
  const options = ['Option 1', 'Option 2'];
  const handleOptionChange = jest.fn();
  render(<Options options={options} selectedOption="" onOptionChange={handleOptionChange} showResult={false} correctAnswer="" />);
  fireEvent.click(screen.getByLabelText('Option 1'));
  expect(handleOptionChange).toHaveBeenCalled();
});

test('applies correct styles for correct and incorrect options', () => {
  const options = ['Option 1', 'Option 2'];
  render(<Options options={options} selectedOption="Option 1" onOptionChange={() => {}} showResult={true} correctAnswer="Option 2" />);
  expect(screen.getByText('Option 1').parentElement).toHaveClass('incorrect');
  expect(screen.getByText('Option 2').parentElement).toHaveClass('correct');
});
