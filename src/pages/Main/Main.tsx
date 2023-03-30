import './Main.css';
import React, { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import CardBox from '../../components/cardBox/cardBox';

function Main() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ref = inputRef.current;
    if (localStorage.getItem('inputValue') && ref !== null) {
      ref.value = localStorage.getItem('inputValue') as string;
    }
    return () => {
      localStorage.setItem('inputValue', ref ? ref.value : '');
    };
  }, []);

  return (
    <div className="main">
      <Header pageName={'Main'} />
      <input type="search" placeholder={'search'} ref={inputRef} />
      <CardBox />
    </div>
  );
}

export default Main;
