import React, { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Maps from './components/Maps';
import ServiceCarousel from './components/ServiceCarousel';
import Values from './components/Values';
import VideoClip from './components/VideoClip';
import WhatsApp from './components/WhatsApp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log(prevScrollPos);
    };
  }, [prevScrollPos]);
  return (
    <div
      id='main'
    >
      <Header />
      <Carousel
      prevScrollPos={prevScrollPos}
      />
      <WhatsApp />
      <VideoClip
      prevScrollPos={prevScrollPos}
      />
      <ServiceCarousel />
      <Values />
      <Clients />
      <Footer />
      <Maps />
    </div>
  );
}

export default App;
