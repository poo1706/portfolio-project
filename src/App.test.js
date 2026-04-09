import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//npm test

//case 2
test('renders edit', () => {
  render(<App />);
  const linkElement2 = screen.getByText(/delete/i);
  expect(linkElement2).toBeInTheDocument();
});