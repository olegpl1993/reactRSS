import { render, screen } from '@testing-library/react';
import React from 'react';
import FormCardBox from './formCardBox';
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

const formStateEmpty: FormStateData[] = [];

describe('FormCardBox', () => {
  it('Render test', () => {
    render(<FormCardBox formState={formState} />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Music genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Gamer?/i)).toBeInTheDocument();
    expect(screen.getByText(/Like color/i)).toBeInTheDocument();
  });
  it('Empty test', () => {
    render(<FormCardBox formState={formStateEmpty} />);
    expect(screen.getByText(/cards list empty/i)).toBeInTheDocument();
  });
});
