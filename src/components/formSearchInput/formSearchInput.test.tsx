import { render, screen } from '@testing-library/react';
import React from 'react';
import FormSearchInput from './formSearchInput';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('FormSearchInput', () => {
  it('FormSearchInput rendering', () => {
    render(
      <Provider store={store}>
        <FormSearchInput />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
