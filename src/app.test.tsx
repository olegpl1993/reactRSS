import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('App rendering', () => {
    render(<App />);
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Forms/i)).toBeInTheDocument();
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
  it('App routing', () => {
    render(<App />);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/About Us/i));
    expect(screen.getByText(/AboutUs page/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Forms/i));
    expect(screen.getByText(/Forms page/i)).toBeInTheDocument();
  });
});
