import { motion } from "framer-motion";

export default function Skills() {
  // Skills with CDN icons (skillicons.dev + simpleicons + others)
  const skills = [
    { name: "HIDS (Wazuh)", icon: "icons/wazuh.png" },       
    { name: "NIDS (Suricata)", icon: "icons/suricata.png" }, 
    { name: "Burp Suite", icon: "icons/burpsuite.png" },     
    { name: "Web Penetration Testing", icon: "icons/webpentest.png" },
    { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "Network Security Monitoring", icon: "icons/netsec.png" },
    { name: "Unity", icon: "https://skillicons.dev/icons?i=unity" },
  ];

  // Languages (flags)
  const languages = [
    { name: "English", icon: "https://flagcdn.com/w20/gb.png" },
    { name: "Indonesia", icon: "https://flagcdn.com/w20/id.png" },
    { name: "Japan", icon: "https://flagcdn.com/w20/jp.png" },
  ];

  // Certifications 
  const certifications = [
    {
      name: "JLPT N4",
      icon: "icons/JLPT_N4.jpg",
      link: "https://www.linkedin.com/in/alghazali-winet-abdurrahman/overlay/1758859016319/single-media-viewer/?profileId=ACoAAEZPl5kBgeSphaBJltMDJF0KfPP6nDVyFxI",
      status: "Verified",
    },
    {
      name: "JLPT N3",
      icon: "icons/JLPT_N3.jpg",
      link: "https://www.linkedin.com/in/alghazali-winet-abdurrahman/overlay/1760945848010/single-media-viewer/?profileId=ACoAAEZPl5kBgeSphaBJltMDJF0KfPP6nDVyFxI",
      status: "Verified",
    },
  ];


  // Awards
  const awards = [
  {
    name: "Finalist GEMASTIK 2024",
    organizer: "Kemendiktisaintek Indonesia",
    date: "2024",
    icon: "icons/gemastik.png",
    preview: "/gemastik-cert.png", 
    link: "https://www.linkedin.com/in/alghazali-winet-abdurrahman/overlay/1755696053145/single-media-viewer/?profileId=ACoAAEZPl5kBgeSphaBJltMDJF0KfPP6nDVyFxI", 
  },
  {
    name: "Top 5 CTF Internal Competition",
    organizer: "President University",
    date: "2025",
    icon: "icons/ctf.png",
    preview: null,
    link: "https://drive.google.com/file/d/1aGA42r5PCNw-vhWbqHdM6cfBhgpxQuRo/view?usp=sharing",
  },
];


  // Work Experiences
  const experiences = [
  {
    role: "IT Planning & Security Intern",
    company: "PT Bukit Asam Tbk",
    duration: "Sep 2025 – Dec 2025",
    icon: "icons/ptba.png",
    responsibilities: [
      "Mapping the Company Security Landscape using CIS v8.1 - NIST CSF v2.0",
      "Creating a Visual Illustration for the Mapping",
      "Analyzing Framework Gaps and Uncovered Subcategories"
    ],
  },
  {
    role: "Developer",
    company: "PT Square Gate One",
    duration: "February 2025 – May 2025",
    icon: "icons/sgo.png",
    responsibilities: [
      "Led a 4-member team to deploy HIDS/NIDS using Wazuh and Suricata on Ubuntu",
      "Simulated real-world attacks and integrated alerts for centralized detection",
      "Delivered detailed documentation covering system setup and analysis",
    ],
  },
];


  return (
    <section
      id="skills"
      className="min-h-screen bg-hero-gradient text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-brand-red"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Skills & Achievements
        </motion.h2>

        {/* Technical Skills */}
        <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
        <h3 className="text-2xl font-semibold mb-6 text-brand-red-light">
            Technical Skills
        </h3>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
            <motion.div
                key={i}
                className="flex items-center gap-3 bg-black/40 rounded-xl px-4 py-3 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
            >
                <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain"
                />
                <span className="text-gray-300">{skill.name}</span>
            </motion.div>
            ))}
        </motion.div>
        </motion.div>


        {/* Languages */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-brand-red-light">
            Languages
          </h3>
          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 bg-black/40 rounded-xl px-4 py-3 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
              >
                <img src={lang.icon} alt={lang.name} className="w-8 h-8 object-contain" />
                <span className="text-gray-300">{lang.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-brand-red-light">
            Certifications
          </h3>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => {
              // simple status styling
              const isVerified = cert.status?.toLowerCase().includes("verified");
              const statusClasses = isVerified
                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                : "bg-amber-500/15 text-amber-300 border border-amber-500/30";

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between bg-black/40 rounded-xl px-5 py-4 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
                >
                  {/* Left: icon + name */}
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={cert.icon}
                      alt={cert.name}
                      className="w-9 h-9 object-contain"
                    />
                    <span className="text-gray-300 truncate">{cert.name}</span>
                  </div>

                  {/* Right: status + optional proof link */}
                  <div className="flex items-center gap-3">
                    {cert.status && (
                      <span className={`text-xs rounded-full px-2 py-1 ${statusClasses}`}>
                        {cert.status}
                      </span>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-red-light hover:underline whitespace-nowrap"
                      >
                        View
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>


        {/* Awards & Activities */}
        <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-brand-red-light">
          Awards & Activities
        </h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between bg-black/40 rounded-xl px-5 py-4 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
            >
              {/* Award info */}
              <div className="flex items-center gap-3">
                <img
                  src={award.icon}
                  alt={award.name}
                  className="w-9 h-9 object-contain"
                />
                <span className="text-gray-300">{award.name}</span>
              </div>

              {/* Optional: external link to proof (e.g., LinkedIn post / certificate image) */}
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-red-light hover:underline"
                >
                  View
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

        
        {/* Work Experience */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-brand-red-light">
            Work Experience
          </h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="bg-black/40 rounded-xl p-5 shadow-red-glow hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-brand-red-light">
                      {exp.role}
                    </h4>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.duration}</p>
                  </div>
                  {/* Company Logo */}
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    className="w-12 h-12 object-contain ml-4"
                  />
                </div>
                <ul className="list-disc list-inside text-gray-400 text-sm mt-2">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
