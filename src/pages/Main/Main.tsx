import './Main.css';
import React, { useEffect, useRef } from 'react';
import CardBox from '../../components/cardBox/cardBox';

interface Props {
  setPageState: React.Dispatch<React.SetStateAction<string>>;
}

function Main(props: Props) {
  const { setPageState } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPageState('Main');
  }, [setPageState]);

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
