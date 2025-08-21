// src/pages/ParkProtectors.jsx
import React from "react";
import FadeWrapper from "../components/FadeWrapper";
import { motion } from "framer-motion";

const bento = "bg-[#2A2A2A] rounded-2xl border border-[#2f2f2f] shadow-lg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.35 },
});

export default function ParkProtectors() {
  return (
    <FadeWrapper>
      {/* Title + Clickable hero */}
      <section className="relative bg-[#1C1C1C] text-white pt-28 pb-10 px-4 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
  className="
    text-4xl sm:text-5xl font-extrabold leading-tight
    text-transparent bg-clip-text bg-gradient-to-r
    from-[#FFA629] to-[#F266AB]
    drop-shadow-[0_6px_24px_rgba(242,102,171,0.25)]
  "
  {...fadeUp(0)}
>
  Park Protectors: UX/UI Case Study
</motion.h1>


          <motion.p
            className="text-md sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
            {...fadeUp(0.05)}
          >
            A digital platform empowering users to explore and protect America’s National Parks —
            built with React, Tailwind, and a passion for nature.
          </motion.p>

          {/* Clickable preview, under the title */}
          <motion.a
            href="https://munozjuan.github.io/ParkProtectors/"
            target="_blank"
            rel="noreferrer"
            className="group block mt-8"
            {...fadeUp(0.12)}
          >
            <div
              className={`${bento} overflow-hidden relative`}
            >
              <img
                src="/park1.png"
                alt="Park Protectors live site preview"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* overlay CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 px-3 py-1.5 text-sm rounded-lg bg-[#FFA629] text-[#1C1C1C] font-semibold shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
                Open Live Site →
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-[#1C1C1C] text-white px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl font-bold text-[#F266AB] mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              People love our national & state parks but aren’t sure how to organize volunteer
              opportunities or support conservation efforts effectively.
            </p>
          </motion.div>

          <motion.div className="flex justify-center" {...fadeUp(0.05)}>
            <img
              src="/parkLogo.png"
              alt="Park Protectors Logo"
              className="w-40 h-40 object-contain"
            />
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-2xl font-bold text-[#F266AB] mb-4">Our Solution</h2>
            <p className="text-gray-300 leading-relaxed">
              “Park Protectors” centralizes donations, volunteer opportunities, news, and tools—
              a single hub that lowers friction and increases real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="bg-[#f4f9f2] py-16 px-6 text-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-[#4d7417] mb-8"
            {...fadeUp(0)}
          >
            Research
          </motion.h2>

          {/* Personas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div className="bg-white rounded-2xl shadow p-6" {...fadeUp(0.05)}>
              <img src="/prodpersona2.png" alt="Persona 1" className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">Persona: Alex Torres</h3>
              <p className="text-sm text-gray-600">
                27 years old | Outdoor adventure photographer & travel blogger
              </p>
            </motion.div>

            <motion.div className="bg-white rounded-2xl shadow p-6" {...fadeUp(0.1)}>
              <img src="/prodpersona1.png" alt="Persona 2" className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">Persona: Lana Gardner</h3>
              <p className="text-sm text-gray-600">35 years old | Park Ranger</p>
            </motion.div>
          </div>

          {/* Interview Plan */}
          <motion.div className="mb-16" {...fadeUp(0.15)}>
            <h3 className="text-2xl font-bold text-[#4d7417] mb-4">Interview Plan</h3>
            <p className="mb-4 text-gray-700">
              We conducted 5 interviews (4 volunteers, 1 seasonal park employee) and a survey to
              understand motivations, barriers, and needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg text-[#4d7417] mb-2">Patron Questions</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>What motivates you to volunteer?</li>
                  <li>What online platforms do you use?</li>
                  <li>Would you donate or volunteer?</li>
                  <li>What tools would help you take action?</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg text-[#4d7417] mb-2">Stakeholder Questions</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>How do you promote engagement?</li>
                  <li>What platforms and tools do you use?</li>
                  <li>What age groups volunteer the most?</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg text-[#4d7417] mb-2">Survey Questions</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Favorite park visited?</li>
                  <li>How do you receive park news?</li>
                  <li>Would a hub be helpful?</li>
                  <li>Volunteer interests/tools?</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Persona + Empathy */}
      <section className="bg-[#f4f9f2] px-6 pt-2 pb-16 text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-16" {...fadeUp(0)}>
            <h3 className="text-2xl font-bold text-[#4d7417] mb-4">User Persona: Desiree Henriott</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/personaDesiree.png" alt="Desiree Henriott" className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold">Desiree Henriott</h4>
                    <p className="text-sm text-gray-600">
                      25 years old · Graduate Student in Biology · Athens, OH
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Desiree is an adventurous grad student passionate about supporting local parks…
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h4 className="text-lg font-semibold text-[#4d7417] mb-2">Empathy Map Highlights</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li><strong>Does:</strong> Volunteers weekly, follows park content on social.</li>
                  <li><strong>Says:</strong> “Volunteering is a great way to give back.”</li>
                  <li><strong>Thinks:</strong> Wants a hub for opportunities.</li>
                  <li><strong>Feels:</strong> Frustrated by algorithms; nervous about outreach.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div className="mb-16" {...fadeUp(0.05)}>
            <h3 className="text-2xl font-bold text-[#4d7417] mb-4">Value Proposition</h3>
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex justify-center">
                <img
                  src="/valueProposition.png"
                  alt="Value Proposition Diagram"
                  className="max-w-[900px] w-full h-auto rounded-lg shadow"
                />
              </div>
              <p className="text-gray-700 text-sm mt-4">
                This chart maps user needs, wants, and fears to the features Park Protectors provides…
              </p>
            </div>
          </motion.div>

          {/* Problem statement */}
          <motion.div className="mb-8" {...fadeUp(0.1)}>
            <h3 className="text-2xl font-bold text-[#4d7417] mb-4">Problem Statement</h3>
            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-800 leading-relaxed">
                We believe that by providing a simpler way to make donations or volunteer at parks…
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design blurb */}
      <motion.section className="bg-[#1C1C1C] text-white px-4 sm:px-8 pb-12" {...fadeUp(0)}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F266AB] mb-6">Design</h2>
          <p className="text-gray-300 leading-relaxed">
            I created mood boards, color palettes, and wireframes in Figma; the final UI uses React + TailwindCSS.
          </p>
        </div>
      </motion.section>

      {/* Site Highlights */}
      <section className="bg-[#1C1C1C] text-white px-4 sm:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-center text-[#F266AB] mb-12" {...fadeUp(0)}>
            Site Highlights
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: "HomepageheroPark.png", label: "Homepage Hero Section" },
              { img: "volunteerPark.png", label: "Volunteer Signup Form" },
              { img: "donatePark.png", label: "Donation Experience" },
              { img: "contactPark.png", label: "Contact Form" },
              { img: "newsPark.png", label: "Live News from NPS API" },
              { img: "mapPark.png", label: "National Parks Map Feature" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`${bento} overflow-hidden`}
                {...fadeUp(0.05 + i * 0.05)}
              >
                <img
                  src={`/${item.img}`}
                  alt={item.label}
                  className="w-full h-auto object-contain"
                />
                <p className="p-4 text-center text-gray-300 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeWrapper>
  );
}
