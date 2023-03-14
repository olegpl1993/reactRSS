import './Header.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface MyProps {
  pageName: string;
}

class Header extends Component<MyProps> {
  render() {
    return (
      <div className="header">
        <div className="page">{this.props.pageName}</div>
        <nav className="navigation">
          <Link to="/">Main</Link>
          <Link to="/aboutUs">About Us</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
