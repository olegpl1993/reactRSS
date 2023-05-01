import './Main.css';
import React, { useContext, useEffect } from 'react';
import CardBox from '../../components/cardBox/cardBox';
import { Context } from '../../App';
import FormSearchInput from '../../components/formSearchInput/formSearchInput';

function Main() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('Main');
  }, [setPageState]);

  return (
    <div className="main">
      <FormSearchInput />
      <CardBox />
    </div>
  );
}

export default Main;
