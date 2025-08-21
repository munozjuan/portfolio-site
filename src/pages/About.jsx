// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});

// Reusable gradient-frame card
function GradientCard({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl p-[1px] bg-gradient-to-r from-[#FFA62940] via-[#F266AB40] to-[#FFA62940] shadow-[0_0_36px_#FFA62926] ${className}`}
    >
      <div className="rounded-2xl bg-[#1C1C1C] border border-[#292929] p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="relative min-h-screen bg-[#111] text-[#EDEDED] px-4 sm:px-6 py-14 sm:py-20">
      {/* soft spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-to-r from-[#FFA62933] to-[#F266AB33]" />
      </div>

      {/* Header */}
      <div className="relative max-w-5xl mx-auto text-center mb-10 sm:mb-14">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] drop-shadow-[0_6px_24px_rgba(242,102,171,0.25)]"
          {...fadeUp(0)}
        >
          Meet Juan
        </motion.h1>
        <motion.p
          className="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
          {...fadeUp(0.05)}
        >
          Product designer & front-end dev blending thoughtful UX with playful motion—
          shipping elegant, performant experiences on the web.
        </motion.p>
      </div>

      {/* Hero row */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Bio */}
        <motion.div {...fadeUp(0.1)}>
          <GradientCard>
            <h2 className="text-xl font-semibold text-[#FFA629] mb-3">Hi, I’m Juan 👋</h2>
            <p className="text-gray-300 leading-relaxed">
              I’m a designer-engineer who loves crafting delightful, usable interfaces. Born in Peru
              and raised in the U.S., I’ve bounced from electrical systems in the Air Force to big data at
              JPMorgan, and now into product design and front-end where empathy, systems thinking, and craft
              meet.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              My work draws from Bauhaus clarity, Frank Lloyd Wright’s warmth, and a dash of
              futurism. When I’m not designing, I’m exploring cities, learning French on Duolingo (Bonjour!), or
              obsessing over typography and sci-fi soundtracks.
            </p>

            {/* quick stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["+4", "yrs designing"],
                ["+12", "projects shipped"],
                ["∞", "curiosity"],
              ].map(([big, label], i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#2b2b2b] bg-[#161616] px-4 py-3 text-center"
                >
                  <div className="text-2xl font-bold text-[#FFA629] leading-none">{big}</div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#FFA629] text-[#1C1C1C] font-semibold hover:shadow-[0_10px_30px_rgba(255,166,41,.35)] transition"
              >
                View Resume <FaArrowRight />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-[#2b2b2b] hover:border-[#FFA629] hover:bg-[#171717] transition"
              >
                Contact
              </a>
              <a
                href="/juan.vcf"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-[#2b2b2b] hover:border-[#FFA629] hover:bg-[#171717] transition"
                download
              >
                vCard <FaDownload />
              </a>
            </div>
          </GradientCard>
        </motion.div>

        {/* Portrait */}
        <motion.div className="md:order-none order-first" {...fadeUp(0.12)}>
          <GradientCard className="h-full">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#2b2b2b] bg-[#0f0f0f]">
              {/* Use your real image path here */}
              <img
                src="/retro-juan.png"
                alt="Juan portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </GradientCard>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="relative max-w-5xl mx-auto mt-12">
        <motion.h3
          className="text-lg font-semibold text-[#F266AB] mb-4"
          {...fadeUp(0.15)}
        >
          What I work with
        </motion.h3>
        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          {...fadeUp(0.18)}
        >
          <GradientCard>
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">Design</p>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Framer", "Adobe CC", "Prototyping", "Design Systems"].map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm rounded-full border border-[#2b2b2b]">
                  {t}
                </span>
              ))}
            </div>
          </GradientCard>
          <GradientCard>
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Vite", "Tailwind", "Three.js", "Framer Motion"].map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm rounded-full border border-[#2b2b2b]">
                  {t}
                </span>
              ))}
            </div>
          </GradientCard>
          <GradientCard>
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">Methods</p>
            <div className="flex flex-wrap gap-2">
              {["User Research", "Accessibility", "Wireframes", "A/B Testing", "IA"].map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm rounded-full border border-[#2b2b2b]">
                  {t}
                </span>
              ))}
            </div>
          </GradientCard>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto mt-12">
        <motion.h3
          className="text-lg font-semibold text-[#F266AB] mb-4"
          {...fadeUp(0.2)}
        >
          A few milestones
        </motion.h3>
        <motion.ol
          className="relative border-l border-[#2b2b2b] space-y-6 pl-6"
          {...fadeUp(0.23)}
        >
          {[
            ["2025", "Portfolio refresh—3D/graphics, motion, and case studies with live demos."],
            ["2024", "UX/UI projects for non-profits and public services; deeper into React + motion."],
            ["2023", "Transitioned from data/engineering roles into product design full-time."],
            ["Earlier", "USAF electrical systems → JPMorgan big data → design systems nerd 🤓"],
          ].map(([year, text]) => (
            <li key={year} className="relative">
              <span className="absolute -left-[9px] top-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FFA629] to-[#F266AB]" />
              <p className="text-sm text-gray-400">{year}</p>
              <p className="text-base">{text}</p>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
