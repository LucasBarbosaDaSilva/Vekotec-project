import React from 'react';

const VideoClip = () => {
  const videoId = 'bAgDd875y-o';

  return (
    <div className="video-container">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="YouTube video player"
      allow="autoplay"
      allowFullScreen
    />
  </div>
  );
};

export default VideoClip;