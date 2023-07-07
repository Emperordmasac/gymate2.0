import Header from '@/components/navigation/header/Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Header component', () => {
  test('renders logo image with correct attributes', () => {
    render(<Header />);
    const logoImage = screen.getByAltText('company logo');

    // Assert that the logo image is rendered
    expect(logoImage).toBeInTheDocument();

    // Assert the correct attributes of the logo image
    expect(logoImage).toHaveAttribute('src', '/images/logo/logo.svg');
    expect(logoImage).toHaveAttribute('width', '100');
    expect(logoImage).toHaveAttribute('height', '100');
    expect(logoImage).toHaveClass('w-full h-auto');
  });

  // test('renders navigation link', () => {
  //   render(<Header />);
  //   const navigationLink = screen.getByRole('link', { name: 'Home' });

  //   // Assert that the navigation link is rendered
  //   expect(navigationLink).toBeInTheDocument();

  //   // Add additional assertions if needed
  // });
});
