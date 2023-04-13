import { ApiResponse, Photo } from 'types';
import './formSearchInput.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { changeSearch } from '../../store/searchSlice';

interface Props {
  setPhotoArr: React.Dispatch<React.SetStateAction<Photo[]>>;
  setNotFind: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormSearchInput(props: Props) {
  const { setPhotoArr, setNotFind } = props;
  const dispatch = useDispatch();

  const searchState: string = useSelector((state: RootState) => state.search.search);
  const changeSearchState = async (str: string) => {
    dispatch(changeSearch(str));
  };

  const queryToApi = async () => {
    const query = searchState ? searchState : 'nature';
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
      <input
        type="search"
        placeholder={'search'}
        value={searchState}
        onChange={(e) => changeSearchState(e.target.value)}
      />
      <input type="submit" className="searchBTN" value="Search" onClick={(e) => handleRequest(e)} />
    </form>
  );
}

export default FormSearchInput;
