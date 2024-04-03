/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryPurple: "#783AFE",
        primaryBlack: "#16181C",
        backgroundColor: "#16171C",
        primaryGreen: "#34E47A",
        secondaryWhite: "#ffffff1a",
        secondaryPurple: "#9690AD",
        primaryGray: "#666F78",
        secondaryBlack: "#191A20",
        secondaryGray: "#626971",
      },
      fontFamily: {
        moderat: ["Moderat"],
        arame: ["Arame"],
      },
      fontSize: {
        42: ["42px", { lineHeight: "44.65px"},],
        22: [
          "22px",
          {
            lineHeight: "27.79px",
          },
        ],

        52: [
          "52px",
          {
            lineHeight: "55.28px",
          },
        ],
      },

      screens: {
        1440: "1400px",
        xs: { min: "200px", max: "470px" },
      },
    },
  },
  plugins: [],
};
