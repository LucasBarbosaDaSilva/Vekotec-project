import React from 'react';
import { ongValues } from '../css/img/svg/onu-svgs';
import '../Values.css';

function Values() {
  return (
    <div className='values-container'>
      <h1 className="value-title">Os Valores da Vekotec estão alinhados com os Objetivos de Desenvolvimento Sustentável</h1>
      <div className="value-container">
        {ongValues.map(value =>
          <div className="value-card">
            <img src={value.image} alt={value.description} height={10} />
          </div>)}
      </div>
    </div>
  );
}

export default Values;