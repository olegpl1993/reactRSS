import { Context } from '../../App';
import './AboutUs.css';
import React, { useContext, useEffect } from 'react';

function AboutUs() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('AboutUs');
  }, [setPageState]);

  return <div className="aboutUs">About Us</div>;
}

export default AboutUs;
