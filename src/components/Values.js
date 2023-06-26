import React from 'react';
import { ongValues  } from '../css/img/svg/onu-svgs';
import '../Values.css';

function Values() {

  const divStyle = {
    backgroundColor: 'rgb(241,105,77)',
    width: '100%'
  };

  return (
    <div style={divStyle} className="background-image">
      <div className="App">
        <h1 className="value-title">Valores</h1>
        <div className="value-container">
          {ongValues.map(value =>
          <div className="value-card">
            <img src={value.image} alt="logo" height={10} />
          </div>)}
        </div>
        <div className="embeleshment" />
      </div>
    </div>
  );
}

export default Values;