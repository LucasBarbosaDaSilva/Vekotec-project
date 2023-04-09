import React from 'react';
import logo1 from '../css/img/logo-vekotec.png';

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
        <header className="App-header">
          <h1>Nossos Valores</h1>
          <text>
            Lorem ipsum dolor sit amet, consectetur
            Nulla eget fermentum massa. Morbi finibus
            Nam sodales suscipit purus, vel sagittis
          </text>
        </header>
      </div>
    </div>
  );
}

export default Values;