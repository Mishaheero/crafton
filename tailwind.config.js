/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1248: "1248px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },

      width: {
        "swiper-width": 'calc(theme("screens.2xl") - 78%)',
        "swiper-width-active": 'calc(theme("screens.2xl") - 70%)',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        darkBlue: {
          100: "#339BD6",
          200: "#076AC2",
          300: "#07559D",
          400: "#0B4D89",
          500: "#0F3D6B",
        },
        black: {
          100: "#4B5563",
        },
        green: {
          100: "#DCEEDE",
          200: "#5AAD8E",
          300: "#389173",
          400: "#2A7C62",
          500: "#1F5D4B",
        },
        gray: {
          100: "#E0E7EA",
          200: "#C2CFD6",
        },
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        xxs: [".8rem", ".9rem"],
        xs: [".9rem", "1rem"],
        sm: ["1rem", "1.25rem"],
        base: ["1.125rem", "1.6875rem"],
        md: ["1.5rem", "2.25rem"],
        lg: ["2.25rem", "2.8125rem"],
        xl: ["4.5rem", "4.5rem"],
        "2xl": ["6rem", "6rem"],
      },

      letterSpacing: {
        tight: "0",
        normal: "0.4px",
        wide: "1px",
        wider: "2px",
        widest: "4px",
      },
    },
  },
  plugins: [],
};
