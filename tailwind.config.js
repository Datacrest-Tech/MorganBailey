/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1B1B",
        char: "#232323",
        slate: {
          DEFAULT: "#5B6472",
          light: "#8A93A0",
        },
        paper: "#FAF9F6",
        line: "#E7E3DB",
        steel: "#10151C",
        brand: {
          DEFAULT: "#FF6A00",
          dark: "#D6560A",
          light: "#FF8A33",
          50: "#FFF3EA",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "rotate-y": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.015)" },
        },
        "logo-zoom": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        flow: "flow 2.6s linear infinite",
        rise: "rise 0.7s cubic-bezier(.2,.8,.2,1) forwards",
        "rotate-y": "rotate-y 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        breathe: "breathe 9s ease-in-out infinite",
        "logo-zoom": "logo-zoom 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
