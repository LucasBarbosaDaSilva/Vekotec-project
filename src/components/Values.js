import React from 'react';
import { ongValues } from '../css/img/svg/onu-svgs';
import '../Values.css';

function Values() {
  return (
    <div className='values-container'>
      <h1 className="value-title">A Vekotec está alinhada com os Objetivos de Desenvolvimento Sustentável da ONU*</h1> <br />
      <p>Os objetivos de desenvolvimento sustentável da ONU são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.</p>
      <div className="value-container">
        {ongValues.map(value =>
          <div key="card" className="value-card">
            <img src={value.image} alt={value.description} height={10} />
          </div>)}
      </div>
      <h6>*para saber mais acesse o site oficial: <a target='_blank' rel='noreferrer' href='https://brasil.un.org/pt-br/sdgs'>https://brasil.un.org/pt-br/sdgs</a></h6>
    </div>
  );
}

export default Values;