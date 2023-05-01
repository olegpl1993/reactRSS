import { Context } from '../../App';
import './Header.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const { themesState, setThemesState, pageState } = useContext(Context);

  const handleChangeThemes = () => {
    setThemesState(themesState === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="header">
      <div className="page" data-testid="page">
        {pageState} page
      </div>
      <nav className="navigation">
        <Link to="/" className="mainLink">
          Main
        </Link>
        <Link to="/aboutUs" className="aboutLink">
          About Us
        </Link>
        <Link to="/forms" className="formsLink">
          Forms
        </Link>
      </nav>
      <button className={`themesBTN ${themesState}`} onClick={handleChangeThemes}>
        Change themes
      </button>
    </div>
  );
}

export default Header;
