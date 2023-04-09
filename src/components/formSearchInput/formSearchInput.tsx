import { ApiResponse, Photo } from 'types';
import './formSearchInput.css';
import React, { useEffect, useRef } from 'react';

interface Props {
  setPhotoArr: React.Dispatch<React.SetStateAction<Photo[]>>;
  setNotFind: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormSearchInput(props: Props) {
  const { setPhotoArr, setNotFind } = props;

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

  const queryToApi = async () => {
    const query = inputRef.current?.value ? inputRef.current?.value : 'nature';
    setNotFind(false);
    if (query) {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdab90d80d88e1e2836283478170c1ff&tags=${query}&extras=url_l&format=json&nojsoncallback=1`;
      const res = await fetch(url);
      const data: ApiResponse = await res.json();
      if (data.stat === 'ok' && data.photos.photo.length > 0) {
        setPhotoArr(data.photos.photo);
      } else {
        setPhotoArr([]);
        setNotFind(true);
      }
    }
  };

  useEffect(() => {
    queryToApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRequest = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    queryToApi();
  };

  return (
    <form className="formSearchRow" onSubmit={(e) => handleRequest(e)}>
      <input type="search" placeholder={'search'} ref={inputRef} />
      <input type="submit" className="searchBTN" value="Search" onClick={(e) => handleRequest(e)} />
    </form>
  );
}

export default FormSearchInput;
