import React from 'react';
import '../style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">IMPHNEN</div>
      <ul className="navbar-links">
        <li><a href="#home">Beranda</a></li>
        <li><a href="#about">Tentang</a></li>
        <li><a href="#about">Kegiatan</a></li>
        <li><a href="#join">Gabung</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;