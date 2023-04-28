import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('AboutUs rendering', () => {
    render(<AboutUs />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
