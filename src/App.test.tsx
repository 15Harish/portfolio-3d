import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio', () => {
  render(<App />);
  const element = screen.getByText(/Harish G/i);
  expect(element).toBeInTheDocument();
});