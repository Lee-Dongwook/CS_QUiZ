const { theme } = require("app/design/tailwind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  important: "html",
  theme: {
    ...theme,
  },
};
