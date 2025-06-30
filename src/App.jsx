import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Card from './components/Card';
import Join from './components/Join';
import Footer from './components/Footer';


import sampleImg from './assets/banner.png';
import imgScroll from './assets/scroll.jpg';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <section className="card-section">
        <h2 className="section-title">Kegiatan Komunitas</h2>
        <div className="card-list">
          <Card 
            title="Forum Diskusi"
            description="Tempat berdiskusi seputar ngoding tanpa tekanan."
            image={sampleImg}
          />
          <Card 
            title="Showcase Project"
            description="Tempat untuk showcase atau pamer pencapaian project buatanmu"
            image={sampleImg}
          />
          <Card 
            title="Proyek Kolaboratif"
            description="Buat proyek bareng tanpa deadline yang bikin stres."
            image={sampleImg}
          />
          <Card 
            title="Scroll Fesnuk"
            description="Solusi kalo stress dan malas ngoding ya scroll facebook"
            image={imgScroll}
          />
        </div>
      </section>
      <Join 
        title="Gabung dengan IMPHNEN"
        requirements={[
          "Tidak sedang dikejar deadline",
          "Menyukai diskusi ringan seputar pemrograman",
          "Siap ngoding saat mood datang"
        ]}
        steps={[
          "Kunjungi grup Facebook IMPHNEN",
          "Klik tombol \"Gabung Grup\"",
          "Jawab pertanyaan santai dari admin 😎"
        ]}
        buttonText="Gabung Sekarang di Facebook 🚀"
        buttonLink="https://facebook.com/groups/imphnen"
      />
      <Footer />
    </div>
  );
};

export default App;
