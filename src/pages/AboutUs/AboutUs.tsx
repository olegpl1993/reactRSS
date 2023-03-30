import './AboutUs.css';
import React, { useEffect, useMemo, useState } from 'react';

interface Props {
  setPageState: React.Dispatch<React.SetStateAction<string>>;
}

function AboutUs(props: Props) {
  const { setPageState } = props;
  useEffect(() => {
    setPageState('About Us');
  }, [setPageState]);

  const [testState, setTestState] = useState('Test String');

  const [changeState, setChangeState] = useState(true);

  useEffect(() => {
    setTestState('UseEffect');
  }, []);

  useMemo(() => {
    setTestState('UseMemo');
  }, []);

  const changeSet = () => {
    setChangeState(changeState ? false : true);
  };

  return (
    <div className="aboutUs">
      <button className="btn" onClick={changeSet}>
        BUTTON
      </button>
      <div className="testString">
        {testState} {changeState ? 'true' : 'false'}
      </div>
    </div>
  );
}

export default AboutUs;
