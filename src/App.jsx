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

      <section id="beranda">
        <Hero />
      </section>

      <section id="tentang">
        <About />
      </section>

      <section id="kegiatan">
      <Kegiatan />
      </section>

      <section id="gabung">
        <Join />
      </section>

      <Footer />
    </div>
  );
};

export default App;