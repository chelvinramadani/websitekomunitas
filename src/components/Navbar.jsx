import { useState, useEffect } from "react";

const menus = ["Beranda", "Tentang", "Kegiatan", "Gabung"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      menus.forEach((menu) => {
        const section = document.getElementById(menu.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(menu.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-blue-950/90 backdrop-blur-xl shadow-lg h-14"
            : "bg-blue-950 h-16"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-extrabold tracking-wide text-white">
          IMPHNEN
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {menus.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`relative transition
                    ${
                      isActive
                        ? "text-blue-400 after:w-full"
                        : "text-gray-300 hover:text-blue-400"
                    }
                    after:absolute after:-bottom-1 after:left-0
                    after:h-0.5 after:bg-blue-400
                    after:transition-all after:duration-300
                  `}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl
            bg-white/10 backdrop-blur border border-white/20"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300
                ${menuOpen ? "rotate-45 top-2.5" : "top-0"}`}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300
                ${menuOpen ? "opacity-0" : "top-2.5"}`}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300
                ${menuOpen ? "-rotate-45 top-2.5" : "top-5"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-14 left-0 w-full bg-blue-950/95 backdrop-blur-xl
          transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <ul className="px-6 py-6 space-y-6 font-semibold shadow-xl">
          {menus.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg transition
                    ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400"
                    }
                  `}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;