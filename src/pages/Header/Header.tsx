import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  pageName: string;
}

function Header(props: Props) {
  const { pageName } = props;
  return (
    <div className="header">
      <div className="page">{pageName} page</div>
      <nav className="navigation">
        <Link to="/">Main</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/forms">Forms</Link>
      </nav>
    </div>
  );
}

export default Header;
