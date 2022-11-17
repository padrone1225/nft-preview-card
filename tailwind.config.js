/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(217, 54%, 11%)",
        "card-bg": "hsl(216, 50%, 16%)",
        "dark-blue": "hsl(215, 32%, 27%)",
        "soft-blue": "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
      },
    },
  },
  plugins: [],
};
