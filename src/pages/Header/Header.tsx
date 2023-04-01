import { ThemesContext } from '../../App';
import './Header.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  pageName: string;
  setThemesState: React.Dispatch<React.SetStateAction<string>>;
}

function Header(props: Props) {
  const { pageName, setThemesState } = props;
  const themes = useContext(ThemesContext);
  const handleChangeThemes = () => {
    setThemesState(themes === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="header">
      <div className="page">{pageName} page</div>
      <nav className="navigation">
        <Link to="/">Main</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/forms">Forms</Link>
      </nav>
      <button className={`themesBTN ${themes}`} onClick={handleChangeThemes}>
        Change themes
      </button>
    </div>
  );
}

export default Header;
