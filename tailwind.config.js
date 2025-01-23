/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#1a2342",
        secondary: "#2FAD66",
        tertiary: "#F0F0F0",
      },
      boxShadow: {
        dropShadow: "0 4px 75px 0 rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        "3px": "3px",
        "30px": "30px",
        "600px": "600px",
      },
      width: {
        "360px":"360px",
      },
      height: {
        // Add your custom heights here
      },
      backgroundColor: {
        // Add your custom background colors here
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"],
      height: ["responsive", "hover", "focus"],
      backgroundColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
