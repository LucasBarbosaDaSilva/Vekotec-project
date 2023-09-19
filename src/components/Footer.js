import React from "react";
import "../Footer.css";
import logoPb from "../css/img/logo-pb.png";
import logoParceiro from "../css/img/logo-parceiro.png";
import logoParceiro2 from "../css/img/logo-parceiro-2.png";
import { email, whats, linkedin, instagram } from "../css/img/svg";

function Footer() {
  return (
    <div className="footer-image" id="contato">
      <img src={logoPb} alt="logo" className="logo-pb" />
      <div className="footer-container">
        <div className="footer-contact">
          <p>Contato: +55(35) 99826-8909 / +55(38) 99995-0128</p>
          <p>E-mail: sac@vekotec.com.br</p>
        </div>
        <div className="footer-parceiros">
          <p className="parceiros">PARCEIRO(S):</p>
          <div className="parceiros-logo-container">
            <img src={logoParceiro} alt="logo" className="logo-parceiro" />
            <img src={logoParceiro2} alt="logo" className="logo-parceiro" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="adrees">
          <p>
            <strong>Escritório Central</strong> - R. Clotilde Soares de Freitas,
            257 - Santa Cruz, Curvelo - MG, 35790-000
          </p>
        </div>
        <div className="footer-svg">
          <a href="mailto:sac@vekotec.com.br" className="email-link">
            <img src={email} alt="email" className="svg" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=35998268909"
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whats} alt="whats" className="svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/vekotecbr/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="svg" />
          </a>
          <a
            href="https://www.instagram.com/vekotec/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="linkedin" className="svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
