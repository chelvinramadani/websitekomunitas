import React, { useState, useEffect } from 'react';
import logo from '../assets/imphnen.png';
import '../style.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Memunculkan hero setelah delay kecil
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // delay 200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'hero-visible' : ''}`} id="home">
      <img src={logo} alt="IMPHNEN Logo" className="hero-logo" />
      <h1 className="hero-title">
        Ingin Menjadi Programmer Handal Namun Enggan Ngoding
      </h1>
      <p className="hero-subtitle">
        Komunitas santai bagi para calon programmer 🤓
      </p>
    </section>
  );
};

export default Hero;
