import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="container">
      <section className="box">
        <div data-testid="spinner" className="spinner" />
      </section>
    </div>
  );
}

export default LoadingSpinner;
