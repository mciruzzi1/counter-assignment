// import necessary react testing library helpers here
// import the Counter component here

import React from "react";
import { render, fireEvent, screen} from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counter_msg = screen.getByText('Counter');
  expect(counter_msg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initial_count = screen.getByText('0');
  expect(initial_count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment_btn = screen.getByText('+');
  fireEvent.click(increment_btn);
  const display_count = screen.getByText('1');
  expect(display_count).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement_btn = screen.getByText('-');
  fireEvent.click(decrement_btn);
  const display_count = screen.getByText('-1');
  expect(display_count).toBeInTheDocument();
});
