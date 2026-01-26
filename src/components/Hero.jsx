import { useState, useEffect } from "react";
import logo from "../assets/imphnen.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"
    >
      {/* Glow background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div
        className={`relative z-10 flex flex-col items-center text-center px-6
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="IMPHNEN Logo"
            className="w-80 md:w-100 lg:w-90
              drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]
              transition-transform duration-500 hover:scale-105"
          />

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold
            leading-tight max-w-3xl text-white text-center">
            Ingin Menjadi Programmer Handal
            <br className="hidden md:block" />
            Namun Enggan Ngoding
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl">
          Komunitas santai bagi para calon programmer
          <span className="ml-1">🤓</span>
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#gabung"
            className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold
              shadow-lg shadow-blue-600/30
              hover:bg-blue-500 hover:scale-105 transition"
          >
            Gabung Sekarang
          </a>

          <a
            href="#kegiatan"
            className="px-8 py-3 rounded-xl border border-white/20 text-white
              hover:bg-white/10 transition"
          >
            Lihat Kegiatan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;