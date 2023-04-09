import { render, screen } from '@testing-library/react';
import React from 'react';
import { FormStateData } from 'types';
import FormCard from './formCard';

const formStateData: FormStateData = {
  name: 'Oleg',
  date: '2023-03-10',
  music: 'Rock',
  gamer: true,
  color: 'green',
  image: '',
};

describe('FormCard test render', () => {
  it('Test rendering single FormCard', () => {
    render(<FormCard formStateData={formStateData} />);
    expect(screen.getByText(/Oleg/)).toBeInTheDocument();
    expect(screen.getByText(/2023-03-10/)).toBeInTheDocument();
    expect(screen.getByText(/Rock/)).toBeInTheDocument();
    expect(screen.getByText(/no img/)).toBeInTheDocument();
  });
});
