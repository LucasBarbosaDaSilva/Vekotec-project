import React from 'react';
import { Parallax } from 'react-parallax';
import logo1 from '../css/img/logo-vekotec.png';
import backImg from '../css/img/valores-vekotec.jpg';
import '../Values.css';

function Values() {
  // const divStyle = {
  //   backgroundImage: `url(${process.env.PUBLIC_URL}/valores-vekotec.jpg)`,
  //   backgroundSize: '100%',
  //   backgroundPosition: 'center',
  //   // height: '700px',
  //   width: '100%'
  // };

  return (
    <Parallax className="parallax" bgImage={backImg} strength={500} widith="100">
      <img src={logo1} alt="Logo da empresa" className="logo-1" />
      <div className="App">
        <div className="embeleshment" />
        
          <h1 className="value-title">Valores</h1>
          <div className="lista-container">
          <div className="lista-div">
          
          <ul>
            <li>•Praticidade</li>
            <li>•Sustentabilidade</li>
            <li>•Segurança</li>
          </ul>
          </div>
          <div className="lista-div">

          <ul>
             <li>•Excelência no atendimento ao cliente</li>
             <li>•Economia</li>
             <li>•Tecnologia</li>
          <li>•Precisão</li>
          </ul>
    </div>
        </div>
      </div>
  
    </Parallax>
  );
}

export default Values;