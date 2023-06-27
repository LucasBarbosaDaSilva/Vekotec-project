import React from 'react';
import { ongValues } from '../css/img/svg/onu-svgs';
import '../Values.css';

function Values() {
  return (
    <div className='values-container'>
      <h1 className="value-title">Valores</h1>
      <div className="value-container">
        {ongValues.map(value =>
          <div className="value-card">
            <img src={value.image} alt="logo" height={10} />
          </div>)}
      </div>
  
    </Parallax>
  );
}

export default Values;