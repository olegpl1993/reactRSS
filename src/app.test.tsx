import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('App rendering', () => {
    render(<App />);
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Forms/i)).toBeInTheDocument();
  });
});
