import React from "react";
import { motion } from "framer-motion";

const bentoBox =
  "p-6 sm:p-8 rounded-2xl bg-[#1C1C1C] shadow-[0_0_10px_rgba(255,166,41,0.1)] border border-[#292929] backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,166,41,0.2)] transition-shadow duration-500";

const About = () => {
  return (
    <section className="min-h-screen bg-[#1C1C1C] text-[#EDEDED] px-4 sm:px-6 py-12 sm:py-20 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* Text Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "anticipate" }}
          viewport={{ once: true }}
          className={`${bentoBox} h-full`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFA629] mb-4 text-left">
            About Me
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-left">
            <p>
              <strong>Hey! I’m Juan</strong> — a UX/UI designer and software engineer who loves creating beautiful, functional experiences.
              Born in Peru and raised in the U.S., my path has taken me from civil engineering in the Air Force to big data at JPMorgan Chase.
            </p>
            <p>
              With a background that bridges electrical systems and user-centered design, I bring a unique perspective to every project I touch.
              I’m deeply inspired by Bauhaus simplicity, Frank Lloyd Wright’s boldness, and the little moments that make design feel human.
            </p>
            <p>
              When I’m not building or designing, you’ll probably find me walking my three pups, exploring new cities, or trying something I’ve never eaten before.
              I’m currently learning French on Duolingo (bonjour 👋), and I have a wildly eclectic taste in cinema, music, and books — from indie gems to magical realism to retro bops.
            </p>
            <p>
              I’m always learning, always growing, and always creating. Let’s make something amazing together.
            </p>
            <p className="italic" style={{ color: "#F266AB" }}>
              PS: Ask me about my favorite foreign film — or Ralph, my Boston Terrier with a dramatic flair. 🐾🎬
            </p>
          </div>
        </motion.div>

        {/* Image Box with Soft Glow Loop */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "anticipate", delay: 0.3 }}
          viewport={{ once: true }}
          className={`${bentoBox} flex items-center justify-center h-full relative`}
        >
          {/* Subtle glowing aura */}
          <motion.div
            className="absolute w-[105%] h-[105%] rounded-2xl z-0"
            style={{
              background: "radial-gradient(circle, rgba(255,166,41,0.05) 0%, rgba(0,0,0,0) 70%)",
            }}
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Portrait */}
          <img
            src="/retro-juan.png"
            alt="Retro anime portrait of Juan"
            className="w-full max-w-[400px] rounded-xl object-cover border-2 border-[#d38c1e] relative z-10"
            style={{
              filter: "saturate(100%) contrast(100%) brightness(98%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
