import React, { useState } from 'react';
import { back1, back2, back3 } from '../css/img/backgrounds';

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
    <div className="relative flex justify-center items-center carousel">
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-md z-10" onClick={handleClickPrev}>Prev</button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-md z-10" onClick={handleClickNext}>Next</button>
      <div className="flex justify-center items-center overflow-hidden">
        <img className="w-full mx-2" src={images[currentImageIndex]} alt={`Carousel background ${currentImageIndex}`} />
      </div>
    </div>
  );
};

export default Carousel;
