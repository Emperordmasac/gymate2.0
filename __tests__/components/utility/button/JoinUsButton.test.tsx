import JOinUsButton from '@/components/utility/button/JoinUsButton';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('JOinUsButton', () => {
  it('should toggle the spin class when mouse enters and leaves', () => {
    render(<JOinUsButton />);

    const button = screen.getByRole('link');
    const icon = screen.getByRole('button');

    expect(icon).not.toHaveClass('custom_spin_button');

    fireEvent.mouseEnter(button);

    expect(icon).toHaveClass('custom_spin_button');

    fireEvent.mouseLeave(button);

    expect(icon).not.toHaveClass('custom_spin_button');
  });

  it('should scroll to top when clicked', () => {
    window.scrollTo = jest.fn();

    render(<JOinUsButton />);

    const button = screen.getByRole('link');

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0 });
  });
});
