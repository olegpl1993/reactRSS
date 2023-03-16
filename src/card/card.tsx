import './card.css';
import React from 'react';

interface Product {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };
}

class Card extends React.Component<Product> {
  render() {
    return (
      <div className="card">
        <div className="title">{this.props.product.title}</div>
        <div className="row">Category: {this.props.product.category}</div>
        <div className="row">Brand: {this.props.product.brand}</div>
        <div className="row">Price: {this.props.product.price}</div>
        <div className="row">Rating: {this.props.product.rating}</div>
        <div className="row">Stock: {this.props.product.stock}</div>
        <div className="row">{this.props.product.description}</div>
        <div className="imgBox">
          <img src={this.props.product.images[0]} className="img" alt="productImg" />
        </div>
      </div>
    );
  }
}

export default Card;
