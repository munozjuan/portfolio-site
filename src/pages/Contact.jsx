// Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState({ phone: false, email: false });
  const nextRef = useRef(null);

  // redirect target for FormSubmit success
  useEffect(() => {
    if (nextRef.current) {
      nextRef.current.value = `${window.location.origin}/?sent=1#contact`;
    }
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setShowToast(true);
      const clean = `${window.location.pathname}#contact`;
      window.history.replaceState({}, "", clean);
      const t = setTimeout(() => setShowToast(false), 3500);
      return () => clearTimeout(t);
    }
  }, []);

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((s) => ({ ...s, [key]: true }));
      setTimeout(() => setCopied((s) => ({ ...s, [key]: false })), 1200);
    } catch {
      // no-op
    }
  };

  const PHONE = "614-226-1165";
  const EMAIL = "JJJUUAANNN07@gmail.com";

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#111] text-[#EDEDED] px-4 sm:px-6 py-12 sm:py-16 flex items-start justify-center"
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-[#F266AB] drop-shadow-[0_6px_24px_rgba(242,102,171,0.25)]"
            {...fadeUp(0)}
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
            {...fadeUp(0.05)}
          >
            Whether you have a question, a project in mind, or just want to say hi — I’d love to hear from you.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* LEFT: profile/contact card */}
          <motion.div {...fadeUp(0.1)}>
            <GradientCard>
              {/* Top: monogram + role */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFA629] to-[#F266AB] grid place-items-center text-[#1C1C1C] font-extrabold">
                  JM
                </div>
                <div>
                  <p className="text-lg font-semibold">Juan Munoz</p>
                  <p className="text-sm text-gray-400">
                    Product Designer · Frontend Dev · UX | UI Dev 
                  </p>
                </div>
              </div>

              {/* Contact rows */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#FFA629] shrink-0" />
                    <a
                      href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
                      className="text-base hover:underline"
                    >
                      {PHONE}
                    </a>
                  </div>
                  <button
                    onClick={() => copy("phone", PHONE)}
                    className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs border border-[#2b2b2b] hover:bg-[#1f1f1f] transition"
                    aria-label="Copy phone"
                  >
                    {copied.phone ? <FaCheck /> : <FaCopy />}{" "}
                    {copied.phone ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#FFA629] shrink-0" />
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-base hover:underline break-all"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <button
                    onClick={() => copy("email", EMAIL)}
                    className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs border border-[#2b2b2b] hover:bg-[#1f1f1f] transition"
                    aria-label="Copy email"
                  >
                    {copied.email ? <FaCheck /> : <FaCopy />}{" "}
                    {copied.email ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="my-6 border-t border-[#2b2b2b]" />

              {/* Social chips (mirrors footer, but prettier) */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
                  Find me
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/JJJUUAannn.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2b2b2b] hover:border-[#FFA629] hover:bg-[#1f1f1f] transition text-sm"
                  >
                    <FaInstagram className="text-[#FFA629]" />
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/munozjuan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2b2b2b] hover:border-[#FFA629] hover:bg-[#1f1f1f] transition text-sm"
                  >
                    <FaLinkedin className="text-[#FFA629]" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/munozjuan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2b2b2b] hover:border-[#FFA629] hover:bg-[#1f1f1f] transition text-sm"
                  >
                    <FaGithub className="text-[#FFA629]" />
                    GitHub
                  </a>
                  
                </div>
              </div>

              {/* Availability badge */}
              <div className="mt-6">
                <span className="inline-flex items-center px-2.5 py-1.5 rounded-full bg-[#161616] border border-[#2b2b2b] text-xs text-gray-300">
                  Currently open to freelance & collabs
                </span>
              </div>
            </GradientCard>
          </motion.div>

          {/* RIGHT: form */}
          <motion.form
            {...fadeUp(0.15)}
            className="w-full"
            action="https://formsubmit.co/JJJUUAANNN07@gmail.com"
            method="POST"
          >
            <GradientCard>
              {/* FormSubmit options */}
              <input type="hidden" name="_subject" value="Website contact from jjjuuaannn.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input ref={nextRef} type="hidden" name="_next" value="" />
              <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

              <div className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-1 text-sm font-medium text-left">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-3 rounded bg-[#292929] text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#FFA629] transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 text-sm font-medium text-left">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 rounded bg-[#292929] text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#FFA629] transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-1 text-sm font-medium text-left">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full p-3 rounded bg-[#292929] text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#FFA629] transition-all duration-300"
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded font-semibold transition duration-300
                             bg-gradient-to-r from-[#FFA629] to-[#F266AB] text-[#1C1C1C]
                             hover:shadow-[0_10px_30px_rgba(242,102,171,.35)]"
                >
                  Send Message
                </button>
              </div>
            </GradientCard>
          </motion.form>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1100] px-4 py-2 rounded-xl bg-[#1C1C1C]/90 border border-[#2b2b2b] shadow-[0_0_20px_rgba(255,166,41,.35)]"
            >
              <span className="text-sm sm:text-base font-medium text-[#EDEDED]">
                Message sent! 🚀 I’ll get back to you soon.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
