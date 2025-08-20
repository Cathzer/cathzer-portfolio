/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#b91c1c",
          "red-light": "#ef4444",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #000000, #0a0a0a, #1a0000)",
        "nav-gradient": "linear-gradient(to right, #000000, #1a0000, #000000)",
      },
      boxShadow: {
        "red-glow": "0 0 20px rgba(185, 28, 28, 0.4)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
