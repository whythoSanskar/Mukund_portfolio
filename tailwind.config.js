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
        sans: ["SF Pro", "system-ui", "sans-serif"],
        'instrument-serif': ['Instrument Serif', 'sans-serif'],
      },
      colors:{
        "greyish" : "#6F6F6F"
      }
    },
  },
  plugins: [],
}

