import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const bentoBox =
  "p-6 sm:p-8 rounded-2xl bg-[#1C1C1C] shadow-[0_0_20px_rgba(255,166,41,0.3)] border border-[#292929] backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,166,41,0.5)] transition-shadow duration-500";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#1C1C1C] text-[#EDEDED] px-4 sm:px-6 py-12 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* Contact Info Bento Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={bentoBox}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFA629] mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Whether you have a question, a project in mind, or just want to say
            hi — I’d love to hear from you. 💬
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <FaPhoneAlt className="text-[#FFA629]" />
            <span>614-226-1165</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#FFA629]" />
            <span>JJJUUAANNN07@gmail.com</span>
          </div>
        </motion.div>

        {/* Contact Form Bento Box */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className={`${bentoBox} space-y-6 w-full`}
          action="https://formspree.io/f/your-form-id" // replace this
          method="POST"
        >
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
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#FFA629] text-[#1C1C1C] font-semibold rounded hover:bg-[#ffba47] hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
