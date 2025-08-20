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
    title: "CTF Challange Full Report",
    desc: "Capture The Flag cybersecurity challenge with a detailed write-up of challenges, solutions, and techniques used.",
    details:
      "This project documents me and my team on CTF challenges, including problem-solving approaches, exploitation techniques, and lessons learned. It demonstrates practical cybersecurity skills and analytical thinking.",
    youtube: null,
    pdf: "/CTF_Report.pdf",
},
  {
    title: "Wazuh + Suricata SOC",
    desc: "Cybersecurity project simulating HIDS & NIDS with alert integrations.",
    details:
      "I implemented a Security Operations Center simulation by integrating Wazuh (HIDS) and Suricata (NIDS). The system detects attacks like brute-force logins, file uploads, and port scans, with alert forwarding.",
    youtube: "https://www.youtube.com/embed/tNefeKXHo9M",
    pdf: "/Wazuh_Report.pdf",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(null);
  const [fullscreenPdf, setFullscreenPdf] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-red-500">Projects</h2>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg hover:shadow-red-500/30"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-gray-400">{project.desc}</p>

            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="mt-4 inline-block text-red-400 hover:text-red-600"
            >
              {open === i ? "Hide Details ↑" : "Learn More →"}
            </button>

            {open === i && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-gray-300 space-y-3"
              >
                <p>{project.details}</p>

                {/* YouTube video */}
                {project.youtube && (
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={project.youtube}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-xl"
                    />
                  </div>
                )}

                {/* PDF viewer with fullscreen */}
                {project.pdf && (
                  <div>
                    <div className="relative w-full aspect-[4/3]">
                      <iframe
                        src={project.pdf}
                        title={project.title}
                        className="absolute inset-0 w-full h-full rounded-xl border border-gray-700"
                      />
                    </div>
                    <button
                      onClick={() => setFullscreenPdf(project.pdf)}
                      className="mt-2 text-sm text-red-400 hover:text-red-600 underline"
                    >
                      Fullscreen PDF
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Fullscreen PDF overlay (works on both PC & mobile) */}
      {fullscreenPdf && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setFullscreenPdf(null)}
              className="text-white text-lg font-bold hover:text-red-400"
            >
              ✕ Close
            </button>
          </div>
          <div className="flex-1 p-2 md:p-0">
            <iframe
              src={fullscreenPdf}
              title="Fullscreen PDF"
              className="w-full h-full rounded-md md:rounded-none"
              style={{ minHeight: "100%", border: "none" }}
            />
          </div>
        </div>
      )}

    </section>
  );
}
