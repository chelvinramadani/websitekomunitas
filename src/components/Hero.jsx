import React from 'react';
import logo from '../assets/imphnen.png';
import '../style.css';

const Hero = () => {
  return (
    <section className="hero">
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
