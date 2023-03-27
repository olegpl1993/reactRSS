import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Error404 from './Error404';

describe('Error404', () => {
  it('Test rendering Error404', () => {
    render(
      <BrowserRouter>
        <Error404 />
      </BrowserRouter>
    );
    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
  });
});
