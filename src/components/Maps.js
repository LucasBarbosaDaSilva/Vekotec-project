import React from 'react';
import map from '../css/img/maps.png'

function Maps() {
  // const styleMaps = {
  //   backgroundImage: `url(${process.env.PUBLIC_URL}/maps.png)`,
  //   backgroundSize: '100%', 
  //   backgroundPosition: 'center',
  //   height: '400px',
  //   width: '100%'
  // };

  return (
    <div className="maps-image">
     <img src={map} alt="maps" />
    </div>
  );
}

export default Maps;