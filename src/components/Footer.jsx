import React from 'react';
import '../style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} IMPHNEN - Ingin Menjadi Programmer Handal Namun Enggan Ngoding</p>
        <p>Made with ❤️ untuk para pejuang malas ngoding.</p>
      </div>
    </footer>
  );
};

export default Footer;
