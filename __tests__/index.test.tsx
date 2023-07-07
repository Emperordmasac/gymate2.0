import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders header component', () => {
    render(<Home />);
    const headerComponent = screen.getByRole('navigation');
    expect(headerComponent).toBeInTheDocument();
  });
});
