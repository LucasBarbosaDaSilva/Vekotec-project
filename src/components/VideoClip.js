import React from 'react';
import '../VideoClip.css'

const VideoClip = () => {
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
    <div className="missão-container">
      <h1 className="missao-title">Missão</h1>
      <p className="paragraph-title">
      Transformamos problemas globais em soluções sustentáveis, preservando o ambiente para as futuras gerações.
      </p>
    </div>
  </div>
  );
};

export default VideoClip;