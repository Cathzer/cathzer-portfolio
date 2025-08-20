import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold text-red-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>
      <p className="mt-6 text-gray-300">Let’s connect! Reach me at:</p>
      <motion.a
        href="mailto:ghazali0102@gmail.com"
        className="mt-6 inline-block px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ghazali0102@gmail.com
      </motion.a>
    </section>
  );
}
