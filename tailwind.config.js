/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1200: "1248px",
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
          100: "#8BCAB1",
          200: "#5AAD8E",
          300: "#389173",
          400: "#2A7C62",
          500: "#1F5D4B",
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
        xxs: [".6875rem", ".875rem"],
        xs: [".9rem", "1rem"],
        sm: ["1rem", "1.25rem"],
        base: ["1.125rem", "1.6875rem"],
        md: ["1.5rem", "2.25rem"],
        lg: ["2.25rem", "2.8125rem"],
        xl: ["4.5rem", "4.5rem"],
        '2xl': ["6rem", "6rem"],
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
