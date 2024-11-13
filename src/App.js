import React, { useRef } from 'react';
import './App.css';
import VideoBackground from './VideoBackground';
import LearnMore from './LearnMore';
import Footer from './Footer'; // Import Footer component

function App() {
  const secondComponentRef = useRef(null);

  const scrollToSecondComponent = () => {
    if (secondComponentRef.current) {
      secondComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <VideoBackground>
        <button onClick={scrollToSecondComponent} className="overlay-button">
          Learn More About Our Mission
        </button>
      </VideoBackground>

      <LearnMore ref={secondComponentRef} />

      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;