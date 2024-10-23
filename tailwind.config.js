/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#554ccc",
        secondary: "#4b42c3",
        procom: {
          orange: "#fd6600",
          "orange-light": "#ff7d00",
          purple: "#300054",
          "purple-light": "#5A1C89",
        },
      },
    },
  },
  plugins: [],
};
