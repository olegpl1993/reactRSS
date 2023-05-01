import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import FormCardBox from './formCardBox';
import { FormStateData } from '../../types';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const formState: FormStateData[] = [
  {
    name: 'Oleg',
    date: '2023-03-10',
    music: 'Rock',
    gamer: true,
    color: 'green',
    image: '',
  },
];
const testSlice = createSlice({
  name: 'test',
  initialState: {
    data: formState as FormStateData[],
  },
  reducers: {
    changeState(state, action) {
      state = action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    formState: testSlice.reducer,
  },
});

const testSlice1 = createSlice({
  name: 'test',
  initialState: {
    data: [] as FormStateData[],
  },
  reducers: {
    changeState(state, action) {
      state = action.payload;
    },
  },
});
const emptyStore = configureStore({
  reducer: {
    formState: testSlice1.reducer,
  },
});

describe('FormCardBox', () => {
  it('Render test', () => {
    render(
      <Provider store={store}>
        <FormCardBox />
      </Provider>
    );
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Music genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Gamer?/i)).toBeInTheDocument();
    expect(screen.getByText(/Like color/i)).toBeInTheDocument();
  });
  it('Empty test', () => {
    render(
      <Provider store={emptyStore}>
        <FormCardBox />
      </Provider>
    );
    expect(screen.getByText(/cards list empty/i)).toBeInTheDocument();
  });
});
