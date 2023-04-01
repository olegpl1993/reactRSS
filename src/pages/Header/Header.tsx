import { ThemesContext } from '../../App';
import './Header.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  pageName: string;
}

function Header(props: Props) {
  const { pageName } = props;
  const { themesState, setThemesState } = useContext(ThemesContext);
  const handleChangeThemes = () => {
    setThemesState(themesState === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="header">
      <div className="page">{pageName} page</div>
      <nav className="navigation">
        <Link to="/">Main</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/forms">Forms</Link>
      </nav>
      <button className={`themesBTN ${themesState}`} onClick={handleChangeThemes}>
        Change themes
      </button>
    </div>
  );
}

export default Header;
