import './App.css';
import Carousel from './components/Carousel';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Maps from './components/Maps';
import Values from './components/Values';
import VideoClip from './components/VideoClip';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <div
      id='main'
    >
      <Header />
      <Carousel />
      <WhatsApp />
      <VideoClip />
      <Values />
      <Clients />
      <Footer />
      <Maps />
    </div>
  );
}

export default App;
