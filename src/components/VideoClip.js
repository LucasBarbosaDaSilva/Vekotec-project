import React from 'react';
import '../VideoClip.css'
import PropTypes from 'prop-types';

const VideoClip = ({ prevScrollPos }) => {
  const videoId = 'bAgDd875y-o';

  return (
    <div className="video-container">
      <div className="video-background" />
      <div className="embelishment-div-video" />
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="YouTube video player"
      allow="autoplay"
      allowFullScreen
    />
    <div className={`missão-container ${prevScrollPos > 278 && `animation`}`}>
      <h1 className="missao-title">Missão</h1>
      <p className="paragraph-title">
      Transformamos problemas globais em soluções sustentáveis, preservando o ambiente para as futuras gerações.
      </p>
    </div>
  </div>
  );
};

VideoClip.propTypes = {
  prevScrollPos: PropTypes.number.isRequired
};

export default VideoClip;