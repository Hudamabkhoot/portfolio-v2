/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      colors: {
        'main-black': '#1C1C1Cff',
        'main-white': '#FEFEFFff',
        'main-gray': '#828282ff',
        'main-purple': '#686BFFff',
        'dark-blue': '#1d232a'
      },
      fontFamily: {
        cairo: ['var(--font-cairo)'],
      },
    }
  },
  plugins: [require("tailwindcss-animate"), require('daisyui')],
}