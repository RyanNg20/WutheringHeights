/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: "40px",
      h2: "24px",
      h3: "14px",
      h4: "12px",
      p: "14px",
    },
    fontWeight: {
      h1: "bold",
      h2: "bold",
      h3: "bold",
      h4: "regular",
      p: "regular",
    },
    textColor: {
      orange: "#FF7A00",
      yellow: "#FFC700",
      white: "#FFFFFF",
      lightGray: "#878787",
      gray: "#1B1B1B",
      darkGray: "#0D0D0D"
    },
    backgroundColor: {
      orange: "#FF7A00",
      yellow: "#FFC700",
      white: "#FFFFFF",
      lightGray: "#878787",
      gray: "#1B1B1B",
      darkGray: "#0D0D0D"
    },
  },
  plugins: [],
}