import './Main.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import products from '../../bd';
import Card from '../../card/card';

class Main extends Component {
  state = {
    inputValue: '',
  };

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  componentDidMount() {
    if (localStorage.getItem('inputValue')) {
      this.setState({ inputValue: localStorage.getItem('inputValue') });
    }
  }

  render() {
    return (
      <div className="main">
        <Header pageName={'Main'} />
        <input
          type="search"
          value={this.state.inputValue}
          placeholder={'search'}
          onChange={(e) => this.setState({ inputValue: e.currentTarget.value })}
        />
        <div className="cardBox">
          {products.map((product) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
