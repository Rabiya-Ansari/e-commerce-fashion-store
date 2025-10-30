import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative overflow-hidden bg-white text-gray-800">
      {/* === HERO SECTION WITH IMAGE === */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Banner Background Image */}
        <img
          src="/media/about-banner.jpg" // 👉 Replace this with your banner image
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          About Us
        </motion.h1>
      </section>

      {/* === ABOUT SECTION === */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-16">
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2"
        >
          <div className="absolute top-6 left-6 w-full h-full border-4 border-[var(--color1)] rounded-xl"></div>
          <img
            src="/media/about.png"
            alt="About"
            className="relative rounded-xl shadow-xl object-cover w-full h-[420px]"
          />
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color2)]">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe in crafting experiences that combine creativity,
            functionality, and elegance. Our mission is to bring beauty into
            everyday living — whether through style, design, or innovation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every detail tells a story, and we take pride in creating something
            truly unique for our customers. Join us in redefining what it means
            to live beautifully.
          </p>
        </motion.div>
      </section>

      {/* === OUR STORY SECTION === */}
      <section className="w-full px-6 md:px-20 py-20 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[var(--color2)] mb-6"
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 leading-relaxed max-w-4xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consequat consequat enim, non auctor massa ultrices non. Quisque at
          vehicula tellus. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
          <br />
          <br />
          Donec gravida lorem elit, quis condimentum ex semper sit amet.
          Aliquam imperdiet sodales. Ut fringilla turpis in vehicula
          vehicula. Etiam sed tincidunt erat, ac pretium dui. In vel lorem vel
          lorem pulvinar vehicula in id nulla.
        </motion.p>
      </section>
    </div>
  );
};

export default About;
