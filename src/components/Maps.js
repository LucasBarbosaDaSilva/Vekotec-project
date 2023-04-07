import React from 'react';

function Maps() {
  const styleMaps = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/maps.png)`,
    backgroundSize: '100%', 
    backgroundPosition: 'center',
    height: '400px',
    width: '100%'
  };

  return (
    <div style={styleMaps} className="footer-image">
     <p></p>
    </div>
  );
}

export default Maps;