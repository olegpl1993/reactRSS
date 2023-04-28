import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import Header from './Header';
import { Context } from '../../App';
import { BrowserRouter } from 'react-router-dom';

const value = {
  themesState: 'light',
  setThemesState: () => {},
  pageState: 'Main',
  setPageState: () => {},
};

describe('Header', () => {
  it('Header rendering', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={value}>
          <Header />
        </Context.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Forms/i)).toBeInTheDocument();
  });
});
