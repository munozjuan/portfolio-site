import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const NAV_H = 80; // match your fixed Navbar height (Tailwind h-20)

export default function Introduction() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scale = Math.min(Math.max(1, 1 + scrollY / 1000), 1.25);

  return (
    <section className="relative w-full overflow-hidden bg-[#1C1C1C]">
      {/* starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* content: full viewport minus navbar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{
          marginTop: NAV_H,
          minHeight: `max(calc(100svh - ${NAV_H}px), calc(100vh - ${NAV_H}px))`,
        }}
      >
        <h1
          className="text-transparent bg-clip-text font-black leading-tight
                     text-[clamp(2.75rem,10vw,5.5rem)]
                     bg-gradient-to-r from-[#FFA629] via-[#FF6FA0] to-[#FF4D8D]"
          style={{ transform: `scale(${scale})`, transition: "transform 0.2s ease-out" }}
        >
          Hello, I’m Juan
        </h1>

        <p className="mt-4 sm:mt-6 text-white/90 text-[clamp(1rem,2.8vw,1.25rem)] max-w-prose">
          A passionate developer crafting immersive, cosmic web experiences.
        </p>
      </motion.div>

      {/* optional fade overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[14vh] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(28,28,28,0) 0%, rgba(28,28,28,1) 60%)" }}
      />
    </section>
  );
}
