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
        // 'sf-pro-display': ['SF Pro Display', 'sans-serif'],
        'instrument-serif': ['Instrument Serif', 'sans-serif'],
      },
      colors:{
        "greyish" : "#6F6F6F",
        "grayer": "#4A4A4A"
      }
    },
  },
  plugins: [],
}

