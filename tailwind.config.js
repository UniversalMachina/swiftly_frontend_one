/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "customGray": {
          "100": "#fdfdfd",
          "200": "#efefef",
          "300": "#e1e1e1",
          "400": "#d1d1d1",
          "500": "#c2c2c2",
          "600": "#afafb0",
          "700": "#9f9f9f",
          "800": "#888",
          "900": "#6c6c6c",
          "1000": "#555",
          "1100": "#4a4a4a",
          "1200": "#404040",
          "1300": "#3c3c3c",
          "1400": "#333",
          "1500": "#282828",
          "1600": "#1c1c1c",
          "1700": "#141513",
          "1800": "#000"
        },
        customColor: {
          100: '#d0e1ff', // Light vibrant purple
          150: '#a3c9ff', // Lighter vibrant purple (added unique shade)
          200: '#75b2ff', // Vibrant purple
          300: '#478cff', // Medium vibrant purple
          350: '#1a66ff', // Medium vibrant purple
          400: '#004ccc', // Darker vibrant purple (corrected the comment)
          500: '#003399', // Dark vibrant purple
        },
      },

    },
  },
  plugins: [],
}
