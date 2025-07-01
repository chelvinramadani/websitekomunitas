import React, { useState, useEffect } from 'react';
import '../style.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'footer-visible' : ''}`}>
      <div className="footer-container">
        <div className="footer-top">
          <h3>IMPHNEN</h3>
          <p>Ingin Menjadi Programmer Handal Namun Enggan Ngoding</p>
        </div>
        <div className="footer-links">
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#kegiatan">Kegiatan</a>
          <a href="#join">Gabung</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IMPHNEN. Made with ❤️ untuk pejuang rebahan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
