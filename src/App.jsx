import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Kegiatan from './components/Kegiatan';
import Join from './components/Join';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="kegiatan">
      <Kegiatan />
      </section>

      <section id="join">
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
      </section>

      <Footer />
    </div>
  );
};

export default App;
