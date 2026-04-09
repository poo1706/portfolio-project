import { render, screen } from '@testing-library/react';

import Counter from './Counter';

test('renders count is 0', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/count:0/i);
  expect(linkElement).toBeInTheDocument();
});