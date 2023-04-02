import LoadingSpinner from '../../components/Spinner/LoadingSpinner';
import { Context } from '../../App';
import './AboutUs.css';
import React, { useContext, useEffect, useMemo, useState } from 'react';

const testFunction = (testState: number) => {
  for (let i = 0; i < 99999999; i++) testState += 1;
  return testState;
};

function AboutUs() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('About Us');
  }, [setPageState]);

  const [testState1, setTestState1] = useState(0);
  const [testState2, setTestState2] = useState(0);
  const changeState1 = () => setTestState1(testState1 + 1);
  const changeState2 = () => setTestState2(testState2 + 1);

  const testValue = useMemo(() => {
    console.log('useMemo');
    return testFunction(testState1);
  }, [testState1]);

  console.log('render');

  return (
    <div className="aboutUs">
      <button className="btn" onClick={changeState1}>
        Plus State1
      </button>
      <button className="btn" onClick={changeState2}>
        Plus State2
      </button>
      <div className="testString">
        {'state1'} {testState1.toString()}
      </div>
      <div className="testString">
        {'state2'} {testState2.toString()}
      </div>
      <div className="testString">
        {'testValue'} {testValue}
      </div>
      <LoadingSpinner />
    </div>
  );
}

export default AboutUs;
