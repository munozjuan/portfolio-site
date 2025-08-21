// Hero3D.jsx
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Environment } from "@react-three/drei";

function useIsMobile(query = "(max-width: 640px)") {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener ? mql.addEventListener("change", onChange) : mql.addListener(onChange);
    return () =>
      mql.removeEventListener ? mql.removeEventListener("change", onChange) : mql.removeListener(onChange);
  }, [query]);
  return isMobile;
}

function Body({ size, color, position = [0, 0, 0], spin = 0.4 }) {
  const ref = useRef();
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * spin;
    ref.current.rotation.x += d * spin * 0.12;
  });
  return (
    <mesh ref={ref} position={position}>
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

function SolarSystem({ y = -2.2, mobile = false }) {
  const t = useRef(0);
  const planetA = useRef(); // blue
  const planetB = useRef(); // bronze (has a moon)
  const moonB = useRef();

  const rA = mobile ? 1.6 : 3.0;
  const rB = mobile ? 0.9 : 1.8;
  const vA = mobile ? 0.45 : 0.35;
  const vB = mobile ? 0.65 : 0.5;
  const rMoon = mobile ? 0.35 : 0.55;
  const vMoon = mobile ? 1.2 : 1.0;

  useFrame((_, d) => {
    t.current += d;

    const aA = t.current * vA;
    const aB = t.current * vB + Math.PI;
    const aM = t.current * vMoon;

    if (planetA.current)
      planetA.current.position.set(Math.cos(aA) * rA, y, Math.sin(aA) * rA);

    if (planetB.current) {
      const bx = Math.cos(aB) * (rA * 0.5 + rB);
      const bz = Math.sin(aB) * (rA * 0.5 + rB);
      planetB.current.position.set(bx, y, bz);

      if (moonB.current) {
        moonB.current.position.set(
          bx + Math.cos(aM) * rMoon,
          y,
          bz + Math.sin(aM) * rMoon
        );
      }
    }
  });

  return (
    <>
      <Body size={mobile ? 1.2 : 1.8} color="#FFA629" position={[0, y, 0]} spin={0.25} />
      <group ref={planetA}><Body size={mobile ? 0.8 : 1.2} color="#c0d7ff" spin={0.5} /></group>
      <group ref={planetB}>
        <Body size={mobile ? 0.9 : 1.3} color="#b38b5e" spin={0.45} />
        <mesh ref={moonB}>
          <sphereGeometry args={[mobile ? 0.28 : 0.4, 32, 32]} />
          <meshStandardMaterial color="#d9d2bf" metalness={0.2} roughness={0.4} />
        </mesh>
      </group>
    </>
  );
}

export default function Hero3D() {
  const isMobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translateY = isMobile ? 0 : scrollY * 0.12;
  const scale = isMobile ? 1 : Math.max(0.9, 1 - scrollY * 0.0006);
  const opacity = Math.max(0.15, 1 - (isMobile ? scrollY / 300 : scrollY / 600));

  // Keep mobile where it was; push LOWER only on desktop so planets sit under the subtitle.
  const copyTopPad = "pt-20 lg:pt-24";
  const systemY = isMobile ? -1.6 : -3.4; // <- lowered on desktop

  return (
    <section className="relative w-full min-h-[100svh] bg-[#1C1C1C] overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,
          transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
        }}
      >
        <Canvas
          className="w-full h-full pointer-events-none"
          camera={{ position: [0, 0, 20], fov: 75 }}
          onCreated={({ gl }) => gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))}
        >
          <ambientLight intensity={0.6} />
          <Environment preset="sunset" />
          <pointLight position={[10, 10, 10]} intensity={1} color="#FFA629" />
          <pointLight position={[0, 0, 20]} intensity={2} color="#ffffff" />
          <Stars radius={100} depth={50} count={isMobile ? 2000 : 5000} factor={isMobile ? 3.5 : 4} fade speed={1} />
          <Suspense fallback={null}>
            <SolarSystem y={systemY} mobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>

      <div className={`relative z-10 px-4 text-center ${copyTopPad} min-h-[calc(100svh-80px)] flex flex-col items-center justify-center gap-3`}>
        <h1 className="text-4xl sm:text-5xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] drop-shadow-[0_2px_6px_#FFA62966]">
          Welcome to Juan&apos;s Universe
        </h1>
        <p className="text-base sm:text-lg text-[#EDEDED]">Design. Code. Explore.</p>
      </div>
    </section>
  );
}
