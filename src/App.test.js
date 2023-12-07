import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Preview of written Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Preview of written Text/i);
  expect(linkElement).toBeInTheDocument();
});
