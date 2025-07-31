/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}" 
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        yellowBase: "#F5CB58",  
        yellow2: "#F3E9B5", 
        orangeBase: "#E95322",
        orange2: "#FFDECF",
        font:"#391713"
      },
    },
  },
  plugins: [],
}