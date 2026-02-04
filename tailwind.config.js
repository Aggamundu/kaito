/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom spacing (use as p-*, m-*, gap-*, etc.)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Custom max/min widths & heights
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-1/2': '50vh',
      },
      // Custom font sizes
      fontSize: {
        sm:"12px",
        base:"14px",
        lg:"18px",
        xl:"24px",
        xxl:"40px",
      },
      // Custom breakpoints (use as sm:, md:, etc.)
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      // Custom colors
      colors: {
        darkgray:"#444444",
        lightgray:"#BBBBBB"
      },
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
