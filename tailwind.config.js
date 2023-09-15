/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: ["flowbite/plugin"],

  colors: {
    primary: {
      50: "#f1f3ff",
      100: "#e6eaff",
      200: "#d0d8ff",
      300: "#abb7ff",
      400: "#7b87ff",
      500: "#464dff",
      600: "#2420ff",
      700: "#140ef3",
      800: "#100bcc",
      900: "#100ca6",
      950: "#03045e",
    },
  },
};
