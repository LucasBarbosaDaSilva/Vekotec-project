import React from 'react';
import { ongValues } from '../css/img/svg/onu-svgs';
import '../Values.css';

function Values() {
  return (
    <div className='values-container'>
      <h1 className="value-title">Os Valores da Vekotec estão alinhados com os Objetivos de Desenvolvimento Sustentável da ONU*</h1> <br />
      <p>que são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são uns dos objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil:</p>
      <div className="value-container">
        {ongValues.map(value =>
          <div className="value-card">
            <img src={value.image} alt={value.description} height={10} />
          </div>)}
      </div>
      <h6>*para saber mais acesse o site oficial: <a href='https://brasil.un.org/pt-br/sdgs'>https://brasil.un.org/pt-br/sdgs</a></h6>
    </div>
  );
}

export default Values;