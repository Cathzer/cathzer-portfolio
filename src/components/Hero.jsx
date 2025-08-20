import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen relative flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <motion.div className="relative z-10 flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-red-500"
        >
          Hello, I'm Alghazali
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl"
        >
          IT Student | Cybersecurity Enthusiast | Web Developer
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg transition-all"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
