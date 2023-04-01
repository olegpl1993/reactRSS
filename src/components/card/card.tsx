import { ThemesContext } from '../../App';
import './card.css';
import React, { useContext } from 'react';
import { Product } from 'types';

interface Props {
  product: Product;
}

function Card(props: Props) {
  const { product } = props;
  const { themesState } = useContext(ThemesContext);

  return (
    <div className={`card ${themesState}`}>
      <div className="title">{product.title}</div>
      <div className="row">Category: {product.category}</div>
      <div className="row">Brand: {product.brand}</div>
      <div className="row">Price: {product.price}</div>
      <div className="row">Rating: {product.rating}</div>
      <div className="row">Stock: {product.stock}</div>
      <div className="row">{product.description}</div>
      <div className="imgBox">
        <img src={product.thumbnail} className="img" alt="productImg" />
      </div>
    </div>
  );
}

export default Card;
