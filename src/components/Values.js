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
     <img src={ logo1 } alt="Logo da empresa" className="logo-1" />
    </div>
  );
}

export default Values;