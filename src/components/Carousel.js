import React, { useState } from 'react';
import { back1, back2, back3 } from '../css/img/backgrounds';
import { right, left } from '../css/img/svg'

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [back1, back2, back3];

  const handleClickPrev = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div
      id='home'
      className="relative flex justify-center items-center carousel"
    >
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white"
        onClick={handleClickPrev}
      >
        <img
          src={left}
          alt='left-arrow'
        />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
        onClick={handleClickNext}
      >
        <img
          src={right}
          alt='right-arrow'
        />
      </button>
      <div className="flex justify-center items-center overflow-hidden">
        <img className="w-full mx-2" src={images[currentImageIndex]} alt={`Carousel background ${currentImageIndex}`} />
      </div>
    </div>
  );
};

export default Carousel;
