/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    flexGrow: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
    },
    textColor: {
      orange: "#FF7A00",
      yellow: "#FFC700",
      white: "#FFFFFF",
      black: "#000000",
      lightGray: "#878787",
      gray: "#1B1B1B",
      darkGray: "#0D0D0D",
      transparent: "transparent",
    },
    backgroundColor: {
      orange: "#FF7A00",
      yellow: "#FFC700",
      white: "#FFFFFF",
      lightGray: "#878787",
      gray: "#1B1B1B",
      darkGray: "#0D0D0D",
      background: "#111111",
    },
    backgroundImage: {
      'sunset': "linear-gradient(to right, #FFC700, #FF7A00)"
    }
  },
  plugins: [],
}