import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-black via-[#1a0000] to-black shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Alghazali's Portfolio</h1>
        <ul className="hidden md:flex space-x-8 text-gray-200">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-500 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-black/90">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-200 hover:text-red-500"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
