import './Main.css';
import React, { Component } from 'react';
import Header from '../Header/Header';

class Main extends Component {
  state = {
    inputValue: '',
  };

  componentWilUnmount() {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  componentDidMount() {
    this.setState(
      localStorage.getItem('inputValue')
        ? { inputValue: localStorage.getItem('inputValue') }
        : { inputValue: '' }
    );
  }

  render() {
    console.log(this.state.inputValue);
    return (
      <div className="main">
        <Header pageName={'Main'} />
        <input
          type="search"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.currentTarget.value })}
        />
      </div>
    );
  }
}

export default Main;
