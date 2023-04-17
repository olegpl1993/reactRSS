import './formSearchInput.css';
import React, { useEffect } from 'react';
import { changeSearch } from '../../store/searchSlice';
import { fetchPhoto } from '../../store/photoSlice';
import { useAppDispatch, useAppSelector } from '../../hook';

function FormSearchInput() {
  const dispatch = useAppDispatch();

  const searchState = useAppSelector((state) => state.search.search);
  const changeSearchState = (str: string) => {
    dispatch(changeSearch(str));
  };

  const queryToApi = async () => {
    const query = searchState ? searchState : 'nature';
    dispatch(fetchPhoto(query));
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
