import { useState, useEffect } from "react";
import banner from "../assets/banner.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="
        relative min-h-screen
        flex items-center justify-center
        px-6 py-24
        bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950
        overflow-hidden
      "
    >
      {/* Glow background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div
        className={`
          relative z-10 max-w-4xl w-full text-center
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Banner */}
        <div className="mb-10 overflow-hidden rounded-3xl">
          <img
            src={banner}
            alt="IMPHNEN Banner"
            className="
              w-full h-auto object-cover
              transition duration-700
              hover:scale-105
            "
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Tentang Kami
          </span>
        </h2>

        {/* Description */}
        <p className="text-blue-100 leading-relaxed text-base md:text-lg">
          Komunitas{" "}
          <span className="font-semibold text-white">
            “Ingin Menjadi Programmer Handal Namun Enggan Ngoding”
          </span>{" "}
          adalah tempat berkumpulnya para calon programmer yang ingin belajar
          dengan santai dan tanpa tekanan. Kami percaya bahwa belajar tidak harus
          selalu serius — bisa lewat diskusi ringan, kegiatan seru, dan berbagi
          pengalaman.
        </p>

        <p className="mt-4 text-blue-100 leading-relaxed text-base md:text-lg">
          Di sini, kamu akan menemukan{" "}
          <span className="text-blue-400 font-semibold">
            teman seperjalanan
          </span>
          , bukan pesaing.
        </p>
      </div>
    </section>
  );
};

export default About;