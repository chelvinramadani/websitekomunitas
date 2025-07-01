import React, { useState, useEffect } from 'react';
import '../style.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // delay sedikit lebih lama dari Hero

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`about-section ${isVisible ? 'about-visible' : ''}`} id="about">
      <div className="about-container">
        <h2 className="about-title">Tentang Kami</h2>
        <p className="about-text">
          Komunitas <strong>“Ingin Menjadi Programmer Handal Namun Enggan Ngoding”</strong> adalah tempat berkumpulnya para calon programmer yang ingin belajar dengan santai dan tanpa tekanan. Kami percaya bahwa belajar tidak harus selalu serius – bisa lewat diskusi ringan, kegiatan seru, dan berbagi pengalaman. Di sini, kamu akan menemukan teman seperjalanan, bukan pesaing.
        </p>
      </div>
    </section>
  );
};

export default About;
