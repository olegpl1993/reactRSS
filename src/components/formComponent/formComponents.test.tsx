import { render, screen } from '@testing-library/react';
import React from 'react';
import FormComponent from './formComponent';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('FormComponent', () => {
  it('FormComponent rendering', () => {
    render(
      <Provider store={store}>
        <FormComponent />
      </Provider>
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
