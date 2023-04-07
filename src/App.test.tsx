import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Test rendering App component with all cards', () => {
    render(<App />);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
    expect(screen.getByText(/Make a search!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
  });

  it('Test open AboutUs page', async () => {
    render(<App />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText('About Us'));
    expect(screen.getByText(/About Us page/i)).toBeInTheDocument();
  });

  it('Test open Forms page', async () => {
    render(<App />);
    expect(screen.getByText(/Forms/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText('Forms'));
    expect(screen.getByText(/Forms page/i)).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Music genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Gamer?/i)).toBeInTheDocument();
    expect(screen.getByText(/Like color/i)).toBeInTheDocument();
    expect(screen.getByText(/Img/i)).toBeInTheDocument();
    expect(screen.getByText(/Create card/i)).toBeInTheDocument();
  });
});
