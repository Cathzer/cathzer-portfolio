"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Desa Harapan Game",
    desc: "Educational game promoting sustainable development using Game-Based Learning.",
    details:
      "This game was created to support sustainable cities and communities by teaching players through interactive learning. Mechanics include resource management, simulation, and challenges based on real-world problems.",
    youtube: "https://www.youtube.com/embed/AlW2dp36g2c",
  },
  {
    title: "CTF Challenge Full Report",
    desc: "Capture The Flag cybersecurity challenge with a detailed write-up of challenges, solutions, and techniques used.",
    details:
      "This project documents me and my team on CTF challenges, including problem-solving approaches, exploitation techniques, and lessons learned. It demonstrates practical cybersecurity skills and analytical thinking.",
    youtube: null,
    image: "ctf_leaderboard.png",
    linkedin:
      "https://www.linkedin.com/in/alghazali-winet-abdurrahman/overlay/1755695855988/single-media-viewer/?profileId=ACoAAEZPl5kBgeSphaBJltMDJF0KfPP6nDVyFxI",
  },
  {
    title: "Wazuh + Suricata SOC",
    desc: "Cybersecurity project simulating HIDS & NIDS with alert integrations.",
    details:
      "I implemented a Security Operations Center simulation by integrating Wazuh (HIDS) and Suricata (NIDS). The system detects attacks like brute-force logins, file uploads, and port scans, with alert forwarding.",
    youtube: "https://www.youtube.com/embed/tNefeKXHo9M",
    linkedin:
      "https://www.linkedin.com/in/alghazali-winet-abdurrahman/overlay/1755695631871/single-media-viewer/?profileId=ACoAAEZPl5kBgeSphaBJltMDJF0KfPP6nDVyFxI",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center text-red-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg hover:shadow-red-500/40 transition-all"
          >
            {/* Title & Short Desc */}
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-400 text-sm">{project.desc}</p>

            {/* Toggle Button */}
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="mt-4 text-sm font-medium text-red-400 hover:underline"
            >
              {open === i ? "Hide Details ↑" : "Learn More →"}
            </button>

            {/* Expanded Content */}
            {open === i && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-gray-300 space-y-4"
              >
                <p className="leading-relaxed">{project.details}</p>

                {/* YouTube Video */}
                {project.youtube && (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src={project.youtube}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                )}

                {/* Local Image */}
                {project.image && (
                  <div
                    onClick={() => setFullscreenImage(project.image)}
                    className="relative w-full h-64 overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* LinkedIn Report */}
                {project.linkedin && (
                  <div className="mt-2">
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-red-400 hover:underline"
                    >
                      🔗 View Full Report on LinkedIn
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Overlay */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setFullscreenImage(null)}
              className="text-white text-lg font-bold hover:text-red-400"
            >
              ✕ Close
            </button>
          </div>
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 md:p-4">
            <img
              src={fullscreenImage}
              alt="Fullscreen Preview"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
