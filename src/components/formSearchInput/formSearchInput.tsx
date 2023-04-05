import { ApiResponse, Photo } from 'types';
import './formSearchInput.css';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  setPhotoArr: React.Dispatch<React.SetStateAction<Photo[]>>;
}

function FormSearchInput(props: Props) {
  const { setPhotoArr } = props;

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

  const [errorQuery, setErrorQuery] = useState(false);
  const handleRequest = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    const ref = inputRef.current;
    const query = ref?.value;
    console.log(query);
    if (query) {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdab90d80d88e1e2836283478170c1ff&tags=${query}&extras=url_l&format=json&nojsoncallback=1`;
      const res = await fetch(url);
      const data: ApiResponse = await res.json();
      console.log(data);
      if (data.stat === 'ok') {
        setPhotoArr(data.photos.photo);
        setErrorQuery(false);
      }
    } else {
      setPhotoArr([]);
      setErrorQuery(true);
    }
  };
  return (
    <form className="formSearchRow" onSubmit={(e) => handleRequest(e)}>
      <input type="search" placeholder={'search'} ref={inputRef} />
      <input type="submit" className="searchBTN" value="Search" onClick={(e) => handleRequest(e)} />
      <div className="error">{errorQuery ? 'error query' : ''}</div>
    </form>
  );
}

export default FormSearchInput;
