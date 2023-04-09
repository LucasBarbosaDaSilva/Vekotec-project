import './App.css';
import './css/service-carousel.css'
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
  return (
    <div
      id='main'
    >
      <Header />
      <Carousel />
      <WhatsApp />
      <VideoClip />
      <ServiceCarousel />
      <Values />
      <Clients />
      <Footer />
      <Maps />
    </div>
  );
}

export default App;
