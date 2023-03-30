import './AboutUs.css';
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';

function AboutUs() {
  const [testState, setTestState] = useState('Test String');

  const [changeState, setChangeState] = useState(true);
  console.log('changeState: ', changeState);

  useEffect(() => {
    console.log('UseEffect');
    setTestState('UseEffect');
  }, []);

  useMemo(() => {
    console.log('UseMemo');
    setTestState('UseMemo');
  }, []);

  const changeSet = () => {
    setChangeState(changeState ? false : true);
  };

  return (
    <div className="aboutUs">
      <Header pageName={'About Us'} />
      <button className="btn" onClick={changeSet}>
        BUTTON
      </button>
      <div className="testString">{testState}</div>
    </div>
  );
}

export default AboutUs;
