import React, { useState } from 'react';
import { right, left } from '../css/img/svg'
import '../Carousel.css';
import carrousel from '../css/img/logo-carrousel';
import { HashLink } from 'react-router-hash-link';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleClickPrev = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? carrousel.length - 1 : currentImageIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentImageIndex(currentImageIndex === carrousel.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div
      id='home'
      className="relative flex justify-center items-center carousel"
    >
      <div className="flex justify-center items-center overflow-hidden carousel-div" style={{
        backgroundImage: `url(${carrousel[currentImageIndex].image})`,
        backgroundColor: 'rgb(47,193,140)',
      }}>
        <img className="carousel-img" src={carrousel[currentImageIndex].image} alt={`Carousel background ${currentImageIndex}`} />
        {/* <div id="embelishment-div" /> */}
        {carrousel[currentImageIndex].classe !== 'esg'
          ?
          <div
            className='carousel-text'
          >
            <h1 className={carrousel[currentImageIndex].classeTitle}>
              <span id='extra-text'></span>
              {carrousel[currentImageIndex].title}
            </h1>
            <img className={carrousel[currentImageIndex].classe} src={carrousel[currentImageIndex].logo} alt={`Logo ${currentImageIndex}`} />
          </div>
          :
          <div
            className='carousel-solution'
          >
            <h1 className={carrousel[currentImageIndex].classeTitle}>
            <span id='extra-text'></span>
              {carrousel[currentImageIndex].title}
            </h1>
          <HashLink
            className='carousel-button'
            smooth to={'/page#contato'}
          >
            Entre em contato
          </HashLink>
          </div>
        }
      </div>
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
    </div>
  );
};

export default Carousel;
