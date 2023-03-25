import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Forms from './Forms';

describe('Forms', () => {
  it('Test rendering Forms', () => {
    render(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Music genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Gamer?/i)).toBeInTheDocument();
    expect(screen.getByText(/Like color/i)).toBeInTheDocument();
    expect(screen.getByText(/Img/i)).toBeInTheDocument();
    expect(screen.getByText(/Create card/i)).toBeInTheDocument();
  });
});
