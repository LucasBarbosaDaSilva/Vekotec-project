import React from "react";
import VLibras from "@djpfs/react-vlibras";
import "../WhatsApp.css";

function WhatsApp() {
  return (
    <div id="whats-container">
      <a
        href="https://api.whatsapp.com/send?phone=35998268909"
        className="whatsapp-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone-3.png"
          alt="WhatsApp"
        />
      </a>
      <VLibras forceOnload={true} />
    </div>
  );
}

export default WhatsApp;
