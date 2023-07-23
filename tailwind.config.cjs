/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fefcff",
          dark: "#1c1b23",
        },
        secondary: {
          DEFAULT: "#fdf6ff",
          dark: "#22202d",
        },
        tertiary: {
          DEFAULT: "#fdf8ff",
          dark: "#33313f",
        },
        emphasis: {
          DEFAULT: "#f4eaff",
          dark: "#332c44",
          hover: "#ebdbff",
          "hover-dark": "#3d2f51",
        },
        accent: {
          DEFAULT: "#6d63a6",
          dark: "#ae88b8",
        },
      },
      fontFamily: {
        sans: ["Montserrat Regular", ...defaultTheme.fontFamily.sans],
        light: ["Montserrat Light", ...defaultTheme.fontFamily.sans],
        heading: ["MAZIUS REVIEW Italic", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
