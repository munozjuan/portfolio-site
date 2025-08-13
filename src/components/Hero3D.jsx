import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";

function Planet({ position, color, size, scrollY, index }) {
  const rotation = [0, scrollY / 300 + index, 0];
  const zShift = scrollY * 0.001 * (index + 1);
  return (
    <mesh position={[position[0], position[1], position[2] - zShift]} rotation={rotation}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.15}
        metalness={0.7}
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={0.9}
      />
    </mesh>
  );
}

export default function CosmicHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = scrollY * 0.3;
  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = 1 + scrollY / 1000;

  return (
    <section className="w-full h-[120vh] bg-[#1C1C1C] relative overflow-hidden">
      <div
        className="sticky top-0 w-full h-screen z-0"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,
          transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
        }}
      >
        <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <Environment preset="sunset" />
          <pointLight position={[10, 10, 10]} intensity={1} color="#FFA629" />
          <pointLight position={[0, 0, 20]} intensity={2} color="#ffffff" />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
          <Suspense fallback={null}>
            <Planet position={[0, 0, 0]} color="#FFA629" size={2} scrollY={scrollY} index={0} />
            <Planet position={[5, 0, 0]} color="#F266AB" size={0.7} scrollY={scrollY} index={1} />
            <Planet position={[-7, 2, -1]} color="#EDEDED" size={1} scrollY={scrollY} index={2} />
            <Planet position={[3, -4, 1]} color="#FFB347" size={0.5} scrollY={scrollY} index={3} />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-0 pb-4 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-36">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] drop-shadow-[0_2px_6px_#FFA62966]">
          Welcome to Juan's Universe
        </h1>
        <p className="text-base sm:text-lg text-[#EDEDED]">Design. Code. Explore.</p>
      </div>
    </section>
  );
}
