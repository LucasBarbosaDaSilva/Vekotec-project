import React from 'react';


function WhatsApp() {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=32988080152"
      className="whatsapp-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
      src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone-3.png"
      alt="WhatsApp" />
    </a>
  );
}

export default WhatsApp;