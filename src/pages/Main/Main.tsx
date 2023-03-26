import './Main.css';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Header from '../Header/Header';
import products from '../../bd';
import Card from '../../components/card/card';

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
      <div className="cardBox">
        {products.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
