import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#ffffff",
      primary: "#00d1b2",
      dark: "#363636",
      gray: {
        100: "#f9f9f9",
        200: "#d5d5d5",
        300: "#78848b",
        400: "#313636",
      },
      black: "#000000",
      red: "#ff0000",
    },
  },
  plugins: [],
};

export default config;
