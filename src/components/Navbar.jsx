import React, { useState, useEffect } from 'react';
import '../style.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">IMPHNEN</div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Beranda</a></li>
          <li><a href="#about" onClick={closeMenu}>Tentang</a></li>
          <li><a href="#kegiatan" onClick={closeMenu}>Kegiatan</a></li>
          <li><a href="#join" onClick={closeMenu}>Gabung</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
