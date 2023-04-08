import './Main.css';
import React, { useContext, useEffect, useState } from 'react';
import CardBox from '../../components/cardBox/cardBox';
import { Context } from '../../App';
import { Photo } from '../../types';
import FormSearchInput from '../../components/formSearchInput/formSearchInput';

function Main() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('Main');
  }, [setPageState]);

  const [photoArr, setPhotoArr] = useState<Photo[]>([]);
  const [isNotFind, setNotFind] = useState<boolean>(false);

  return (
    <div className="main">
      <FormSearchInput setPhotoArr={setPhotoArr} setNotFind={setNotFind} />
      <CardBox photoArr={photoArr} isNotFind={isNotFind} />
    </div>
  );
}

export default Main;
