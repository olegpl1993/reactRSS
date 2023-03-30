import './Error404.css';
import React, { useEffect } from 'react';

interface Props {
  setPageState: React.Dispatch<React.SetStateAction<string>>;
}

function Error404(props: Props) {
  const { setPageState } = props;
  useEffect(() => {
    setPageState('Forms');
  }, [setPageState]);
  return (
    <div className="error404">
      <div className="header">Error 404</div>
    </div>
  );
}

export default Error404;
