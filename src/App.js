import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Values from './components/Values';
import VideoClip from './components/VideoClip';

function App() {
  return (
    <div
      id='main'
    >
      <Header />
      <Carousel />
      <VideoClip />
      <Values />
    </div>
  );
}

export default App;
