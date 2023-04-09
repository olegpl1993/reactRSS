import { render, screen } from '@testing-library/react';
import React from 'react';
import Error404 from './Error404';

describe('Error404', () => {
  it('Error404 rendering', () => {
    render(<Error404 />);
    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
  });
});
