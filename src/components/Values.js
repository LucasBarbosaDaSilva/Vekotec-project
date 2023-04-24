import React from 'react';
import logo1 from '../css/img/logo-vekotec.png';
import '../Values.css';

function Values() {
  const divStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/valores-vekotec.jpg)`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    // height: '700px',
    width: '100%'
  };

  return (
    <div style={divStyle} className="background-image">
      <img src={logo1} alt="Logo da empresa" className="logo-1" />
      <div className="App">
        <div className="embeleshment" />
        
          <h1 className="value-title">Valores</h1>
          <div className="lista-container">
          <div className="lista-div">
          
          <ul>
            <li>•Excelência no atendimento ao cliente</li>
            <li>•Sustentabilidade</li>
            <li>•Segurança</li>
          </ul>
          </div>
          <div className="lista-div">

          <ul>
             <li>•Praticidade</li>
             <li>•Economia</li>
             <li>•Tecnologia</li>
          <li>•Precisão</li>
          </ul>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Values;