import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('LoadingSpinner rendering', () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
