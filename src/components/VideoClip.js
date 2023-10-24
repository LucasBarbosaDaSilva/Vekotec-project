import React from "react";
import "../VideoClip.css";
import PropTypes from "prop-types";

const VideoClip = ({ prevScrollPos }) => {
  const videoId = "bAgDd875y-o";

  return (
    <div className="video-container">
      <div className="video-container-left">
        <div className="video-background" />
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          title="YouTube video player"
          allow="autoplay"
          allowFullScreen
        />
      </div>
      <div className={`missão-container ${prevScrollPos > 278 && `animation`}`}>
        <h1 className="missao-title">Quem Somos</h1>
        <p className="paragraph-title">
          Transformamos problemas globais em soluções sustentáveis, preservando
          o ambiente para as futuras gerações. Com excelência técnica e
          responsabilidade social, aspiramos a contribuir para um futuro mais
          equitativo e equilibrado.
        </p>
        <h1 className="missao-title">Missão</h1>
        <p className="paragraph-title">
          A missão da nossa empresa é fornecer Soluções Ambientais, Topografia e
          Mineração. Buscamos atender às necessidades dos nossos clientes de
          forma precisa, ética e inovadora. Nosso compromisso é promover o
          desenvolvimento sustentável, garantindo a integridade do meio ambiente
          e a eficiência das atividades humanas.
        </p>
      </div>
    </div>
  );
};

VideoClip.propTypes = {
  prevScrollPos: PropTypes.number.isRequired,
};

export default VideoClip;
