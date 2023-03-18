import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header', () => {
  it('Test rendering Header component', () => {
    render(<Header pageName={'test name'} />);
    expect(screen.getByText(/test name page/i)).toBeInTheDocument();
  });
});
