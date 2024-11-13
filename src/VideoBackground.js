import React, { useState } from 'react';
import './VideoBackground.css';
import hex_logo from './images/hex_logo.png';

const VideoBackground = ({children}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/BackgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="button-container">

      <div className = "dropdown2">
          <button className="dropdown2-button" onClick = {toggleDropdown}>
            More About Us
          </button>
          {isDropdownOpen &&(
            <div className="dropdown2-content">
            <a href="#option1">Who We Are</a>
              <a href="#option2">Gallery</a>
              <a href="#option3">FAQ</a>
            </div>
          )}
        </div>
        {/* Dropdown Button */}
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Support Us
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#option1">Invest Now</a>
              <a href="#option2">Sponsor Us</a>
              <a href="#option3">Option 3</a>
            </div>
          )}
        </div>
        
      </div>

      <div className="BuyButton">
        <button className="buying-button">Build Your Home</button>
      </div>

      <div className="text-container">
        <h1>Welcome to The Future of Sustainable Housing</h1>
      </div>
      <div className="logo">
        <img src={hex_logo} alt="" />
      </div>
      {children}
    </div>
  );
};

export default VideoBackground;