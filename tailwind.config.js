/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9629", 
        secondary: "#F59E0B", 
        text: "#F5FFFF", 
      },
    },
  },
  plugins: [],
};
