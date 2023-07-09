import Header from '@/components/navigation/header/Header';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should toggle the sticky state when scrolling', () => {
    render(<Header />);

    // Mock scrollY value
    Object.defineProperty(window, 'scrollY', { value: 0 });

    fireEvent.scroll(window);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-transparent');

    Object.defineProperty(window, 'scrollY', { value: 20 });

    fireEvent.scroll(window);

    expect(nav).toHaveClass('!bg-black');
  });

  it('should open and close the mobile navigation on icon click', () => {
    render(<Header />);

    const icon = screen.getByRole('toggle_moble_nav');

    fireEvent.click(icon);

    const mobileNav = screen.getByRole('mobile_nav');
    expect(mobileNav).toHaveClass('left-0');

    fireEvent.click(icon);

    expect(mobileNav).not.toHaveClass('left-0');
  });

  it('should open and close the sidebar on icon click', () => {
    render(<Header />);

    const icon = screen.getByRole('toggle_sidebar_nav');

    fireEvent.click(icon);

    const sidebar = screen.getByRole('sidebar_nav');
    expect(sidebar).toHaveClass('left-0');

    fireEvent.click(icon);

    expect(sidebar).not.toHaveClass('left-0');
  });
});
