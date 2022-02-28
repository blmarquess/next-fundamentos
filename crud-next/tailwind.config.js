module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '340px',
      // => @media (min-width: 340px) { ... }

      'md': '576px',
      // => @media (min-width: 576px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '960px',
      // => @media (min-width: 960px) { ... }

      '2xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
