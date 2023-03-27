import './AboutUs.css';
import React from 'react';
import Header from '../Header/Header';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUs">
        <Header pageName={'About Us'} />
        <div className="header">About Us</div>
      </div>
    );
  }
}

export default AboutUs;
