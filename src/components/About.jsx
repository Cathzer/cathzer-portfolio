import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a0000]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-red-500 mb-6"
      >
        About Me
      </motion.h2>

      {/* Wrapper for Image + Text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-4xl">
        
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg" // 👉 place your image in the public folder as profile.jpg
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-40 h-40 rounded-full object-cover shadow-lg border-2 border-red-500"
        />

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I’m an IT student passionate about{" "}
          <span className="text-red-400">cybersecurity</span>, web development,
          and building solutions that make an impact. Currently studying at
          President University, I aim to continue improving my skills through
          hands-on projects and learning new technologies.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
