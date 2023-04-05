import './cardBox.css';
import Card from '../../components/card/card';
import React from 'react';
import products from '../../bd';

function CardBox() {
  return (
    <div className="cardBox">
      {products.map((product) => (
        <div key={product.id}>
          <Card product={product} />
        </div>
      ))}
    </div>
  );
}

export default CardBox;
