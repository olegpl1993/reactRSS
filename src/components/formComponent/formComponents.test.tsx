import { render, screen } from '@testing-library/react';
import React from 'react';
import FormComponent from './formComponent';
import { FormStateData } from 'types';

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
const setFormState = () => {};

describe('FormComponent', () => {
  it('FormComponent rendering', () => {
    render(<FormComponent formState={formState} setFormState={setFormState} />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Music genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Gamer?/i)).toBeInTheDocument();
    expect(screen.getByText(/Like color/i)).toBeInTheDocument();
    expect(screen.getByText(/Img/i)).toBeInTheDocument();
    expect(screen.getByText(/Create card/i)).toBeInTheDocument();
  });
});
