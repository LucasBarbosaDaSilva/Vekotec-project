import React from 'react';

function Footer() {
  const styleFooter = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/footer-image.jpeg)`,
    backgroundSize: '100%', 
    backgroundPosition: 'center',
    
  };

  return (
    <div style={styleFooter} className="footer-image">
     <p></p>
    </div>
  );
}

export default Footer;