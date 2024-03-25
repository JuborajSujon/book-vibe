/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": "'Work Sans', sans-serif",
        playfair: "'Playfair Display', serif",
      },
      colors: {
        "clr-primary": "#131313",
        "clr-secondary": "#23BE0A",
        "clr-bg-secondary": "#23be0a0d",
        "clr-blue": "#328EFF",
        "clr-bg-blue": "#328eff26",
        "clr-orange": "#FFAC33",
        "clr-bg-orange": "#ffac3326",
        "clr-cyan": "#59C6D2",
        "clr-teal": "#50B1C9",
      },
    },
  },
  plugins: [require("daisyui")],
};
