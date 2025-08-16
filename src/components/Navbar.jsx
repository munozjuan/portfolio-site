import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-nav text-white border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="block">
  <div className="w-16 h-10 md:w-20 md:h-12 lg:w-24 lg:h-14 xl:w-28 xl:h-16 overflow-hidden flex items-center justify-center rounded"
       style={{ backgroundColor: '#292929' }}>
    <video
      src="/logo.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      style={{
        display: 'block',
      }}
    />
  </div>
</Link>



          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-8 tracking-widest text-sm uppercase items-center font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-brand-light after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[#FFA629] after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname === link.path ? "after:w-full" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-brand-nav flex flex-col justify-center items-center space-y-6 z-40 animate-fadeIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-3xl text-white hover:text-gray-400 transition"
            aria-label="Close menu"
          >
            ✖
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl uppercase tracking-wider hover:text-[#FFA629] transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-[#FFA629] text-black px-6 py-3 text-lg font-medium uppercase tracking-wide hover:bg-[#e6951f] transition"
          >
            Let's work together →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
