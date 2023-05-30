/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue,jsx,html}"],
  theme: {
    // screens: {
    //   sm: "567px",
    //   md: "768px",
    //   lg: "1025px",
    //   xl: "1280px",
    //   '2xl': "1440px",
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "3.125rem",
        xl: "6.25rem",
      },
    },
    extend: {
      colors: {
        'primary': 'hsl(326, 93%, 61%)',
        'inverse-primary': 'hsl(326, 91%, 77%)',
        'inverse-primary-400': 'hsl(326, 100%, 97%)',
        'secondary':'hsl(39, 87%, 94%)',
        'inverse-secondary': 'hsl(42, 62%, 96%)',
        'black': 'hsl(0, 0%, 22%)',
        'black-90': 'hsl(220, 2%, 38%,)',
        'brightPale': 'hsl(7, 46%, 79%)'

      },
      fontFamily:{
        Cormorant: ['Cormorant Upright', 'serif']
      },
      letterSpacing:{
        'sm': ' 0.4rem',
        'xl': '1.813rem'
      },
      fontSize:{
        '10': '10px',
        '11': '11px',
        '12': '12px',
      },
      
    }, 
  },
  plugins: [],
};
