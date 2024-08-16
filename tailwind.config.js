/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        8125: '.8125rem',
      },
      colors: {
        'text_body':'var(--text_body)',
        'main_color': 'var(--main-color)',
        'text_primary': 'var(--text-primary)',
        'text_secondary': 'var(--text-secondary)',
      },
      screens: {

        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'xm': {'max': '400px'}
      }
    },
  },
  plugins: [],
}