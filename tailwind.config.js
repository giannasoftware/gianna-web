/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,jsx,html}",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],
  theme: {
    // screens: {
    //   xs:{min: '280px',max: '320px'}
    // sm: "567px",
    // md: "768px",
    // lg: "1025px",
    // xl: "1280px",
    // '2xl': "1440px",
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3.125rem",
        xl: "6.25rem",
      },
    },
    extend: {
      screens: {
        xs:{max: '320px'}
      },
      colors: {
        black: "hsl(0, 0%, 22%)",
        secondary: "hsl(39, 87%, 94%)",
        primary: "hsl(326, 93%, 61%)",
        blue: "hsla(205, 89%, 50%, 1)",
        purple: "hsla(248, 69%, 55%, 1)",
        yellow: "hsl(43, 98%, 62%)",
        green: "hsl(142, 32%, 30%)",
        brightPale: "hsl(7, 46%, 79%)",
        "inverse-primary": "hsl(326, 91%, 77%)",
        "inverse-primary-400": "hsl(326, 100%, 97%)",
        "inverse-secondary": "hsl(42, 62%, 96%)",
        "black-90": "hsl(220, 2%, 38%,)",
      },
      fontFamily: {
        Cormorant: ["'Cormorant Upright'", "serif"],
        Jost: ["'Jost'", 'sans-serif']
      },
      fontWeight:{
        'extrabold': '900',
        black: '1000'
      },
      letterSpacing: {
        sm: " 0.4rem",
        xl: "1.813rem",
      },
      fontSize: {
        10: "10px",
        11: "11px",
        12: "12px",
      },
      
    },
  },
  plugins: [require("flowbite/plugin")],
};
