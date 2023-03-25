import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Test rendering App component with all cards', () => {
    render(<App />);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
    expect(screen.getByText('iPhone 9')).toBeInTheDocument();
    expect(screen.getByText('iPhone X')).toBeInTheDocument();
    expect(screen.getByText('Samsung Universe 9')).toBeInTheDocument();
    expect(screen.getByText('OPPOF19')).toBeInTheDocument();
    expect(screen.getByText('Huawei P30')).toBeInTheDocument();
    expect(screen.getByText('MacBook Pro')).toBeInTheDocument();
    expect(screen.getByText('Samsung Galaxy Book')).toBeInTheDocument();
    expect(screen.getByText('Microsoft Surface Laptop 4')).toBeInTheDocument();
    expect(screen.getByText('Infinix INBOOK')).toBeInTheDocument();
    expect(screen.getByText('HP Pavilion 15-DK1056WM')).toBeInTheDocument();
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
  });
});
