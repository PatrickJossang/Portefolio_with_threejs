/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',

      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",

        colors: {
          transparent: "transparent",
          current: "currentColor",
          white: "#ffffff",
          purple: "#3f3cbb",
          midnight: "#121063",
          metal: "#565584",
          tahiti: "#3ab7bf",
          silver: "#ecebff",
          bubbleGum: "#ff77e9",
          bermuda: "#78dcca",
          black: "#000000",
          gray: "#f7f7f7",
          green: "#00ff00",
          red: "#ff0000",
          blue: "#0000ff",
          yellow: "#ffff00",
          orange: "#ffa500",
          pink: "#ffc0cb",
          violet: "#ee82ee",
          indigo: "#4b0082",
          brown: "#a52a2a",
          cyan: "#00ffff",
          magenta: "#ff00ff",
          lime: "#00ff00",
          maroon: "#800000",
          navy: "#000080",
          olive: "#808000",
          purple: "#800080",
          teal: "#008080",
          silver: "#c0c0c0",
          extend: {
            Image: {},
          },
        },
      },
    },
  },
  plugins: [],
};
