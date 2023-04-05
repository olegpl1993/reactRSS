import './Main.css';
import React, { useContext, useEffect, useRef } from 'react';
import CardBox from '../../components/cardBox/cardBox';
import { Context } from '../../App';

function Main() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('Main');
  }, [setPageState]);

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
      <input type="search" placeholder={'search'} ref={inputRef} />
      <CardBox />
    </div>
  );
}

export default Main;
