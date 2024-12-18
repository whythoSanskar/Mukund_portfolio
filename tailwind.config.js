/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        'instrument-serif': ['Instrument Serif', 'sans-serif'],
        'neu-montreal': ['Neu Montreal', 'sans-serif'],
        'creato': ['Creato Display', 'sans-serif'],
      },
      colors:{
        "greyish" : "#858585",
        "grayer": "#4A4A4A"
      }
    },
  },
  plugins: [],
}

