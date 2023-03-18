import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('Test rendering AboutUs component', () => {
    render(<AboutUs />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
