import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './card';

const product = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: ['https://i.dummyjson.com/data/products/1/3.jpg'],
};

describe('Card', () => {
  it('Test rendering single Card', () => {
    render(<Card product={product} />);
    expect(screen.getByText('iPhone 9')).toBeInTheDocument();
    expect(screen.getByText(/smartphones/)).toBeInTheDocument();
    expect(screen.getByText(/Apple/)).toBeInTheDocument();
    expect(screen.getByText(/549/)).toBeInTheDocument();
    expect(screen.getByText(/4.69/)).toBeInTheDocument();
    expect(screen.getByText(/94/)).toBeInTheDocument();
    expect(screen.getByText(/An apple mobile which is nothing like apple/)).toBeInTheDocument();
    expect(screen.getByAltText('productImg')).toBeInTheDocument();
  });
});
