import { Context } from '../../App';
import './Error404.css';
import React, { useContext, useEffect } from 'react';

function Error404() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('Error404');
  }, [setPageState]);

  return <div className="error404">Error 404</div>;
}

export default Error404;
