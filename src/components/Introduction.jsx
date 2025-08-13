import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Introduction = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rawScale = 1 + scrollY / 1000;
  const scale = Math.min(Math.max(1, rawScale), 1.25);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#1C1C1C] text-center">
      {/* 🌌 Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      {/* ✨ Bottom fade */}
      <div
        className="absolute bottom-0 w-full h-[15vh] z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(28,28,28,0) 0%, white 100%)",
        }}
      ></div>

      {/* 💬 Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-20 px-4 pt-20 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32"
      >
        <h1
          className="text-[clamp(3.5rem,10vw,10rem)] font-black leading-tight break-words text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB]"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.2s ease-out",
          }}
        >
          Hello, I’m Juan
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white">
          A passionate developer crafting immersive, cosmic web experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;
