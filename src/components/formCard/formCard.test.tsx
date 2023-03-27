import { render, screen } from '@testing-library/react';
import React from 'react';
import FormCard from './formCard';

const formData = {
  name: 'Oleg',
  date: '2023-03-10',
  music: 'Rock',
  gamer: true,
  red: true,
  green: false,
  image: '',
};

describe('FormCard', () => {
  it('Test rendering single FormCard', () => {
    render(<FormCard formData={formData} />);
    expect(screen.getByText(/Oleg/)).toBeInTheDocument();
    expect(screen.getByText(/2023-03-10/)).toBeInTheDocument();
    expect(screen.getByText(/Rock/)).toBeInTheDocument();
    expect(screen.getByText(/no img/)).toBeInTheDocument();
  });
});
