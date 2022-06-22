import { render, screen } from '@testing-library/react';
import Timer from './Timer';

test('renders seconds', () => {
  render(<Timer />);
  const linkElement = screen.getByText(/Seconds:/i);
  expect(linkElement).toBeInTheDocument();
});
