import './Main.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import products from '../../bd';
import Card from 'card/card';

class Main extends Component {
  state = {
    inputValue: '',
  };

  componentWillUnmount() {
    console.log('Save to LS');
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  componentDidMount() {
    console.log('Load from LS');
    if (localStorage.getItem('inputValue')) {
      this.setState({ inputValue: localStorage.getItem('inputValue') });
    }
  }

  render() {
    console.log('state: ', this.state.inputValue);
    return (
      <div className="main">
        <Header pageName={'Main'} />
        <input
          type="search"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.currentTarget.value })}
        />
        <div className="cardBox">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="title">{product.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
