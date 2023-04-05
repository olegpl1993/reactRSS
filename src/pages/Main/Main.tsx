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

  return (
    <div className="main">
      <FormSearchInput setPhotoArr={setPhotoArr} />
      {photoArr.length ? <CardBox photoArr={photoArr} /> : 'Make a search!'}
    </div>
  );
}

export default Main;
