import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import Card from './card';
import { Photo } from '../../types';

const photo: Photo = {
  id: '52801017300',
  owner: '182975624@N06',
  secret: '1386378bb2',
  server: '65535',
  farm: 66,
  title: 'CAR(101)',
  ispublic: 1,
  isfriend: 0,
  isfamily: 0,
  url_l: 'https://live.staticflickr.com/65535/52801017300_1386378bb2_b.jpg',
  height_l: 768,
  width_l: 1024,
};

describe('Card', () => {
  it('Test rendering single Card', () => {
    render(<Card photo={photo} />);
    expect(screen.getByAltText('img')).toBeInTheDocument();
  });
});
