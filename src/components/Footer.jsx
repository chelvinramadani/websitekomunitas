import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-white">
        
        {/* Brand */}
        <div className="mb-6">
          <h3 className="text-xl font-extrabold tracking-wide text-white">
            IMPHNEN
          </h3>
          <p className="mt-2 text-xs text-blue-200">
            Ingin Menjadi Programmer Handal Namun Enggan Ngoding
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center flex-wrap gap-4 mb-6 text-sm font-medium">
          {[
            { label: "Beranda", href: "#beranda" },
            { label: "Tentang", href: "#tentang" },
            { label: "Kegiatan", href: "#kegiatan" },
            { label: "Gabung", href: "#join" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-blue-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/groups/programmerhandal?locale=id_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/imphnen.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/imphnen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              className="text-blue-300 hover:text-white transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-4 text-xs text-blue-300">
          © {new Date().getFullYear()} IMPHNEN. Made with ❤️ untuk pejuang rebahan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;