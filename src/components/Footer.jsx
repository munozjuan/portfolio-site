// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-6">
        {/* Left: Socials + Email */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://www.instagram.com/JJJUUAannn.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFA629] transition text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/munozjuan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFA629] transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/munozjuan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFA629] transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
  href="https://mail.google.com/mail/?view=cm&to=JJJUUAANNN07@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#FFA629] transition text-xl"
  aria-label="Email"
>
  <FaEnvelope />
</a>

        </div>

        {/* Right: Copyright */}
        <div className="text-center sm:text-right">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Juan Munoz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
