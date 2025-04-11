/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        textPrimary: "#444444",
        textSecondary: "#888888",
        darkTextPrimary: "#d1d1d1",
        darkTextSecondary: "#a1a1a1",
        darkBg: "#1a1a1a",
      },
      padding: {
        xs: "4px", // extra small
        sm: "8px", // small
        md: "12px", // medium
        lg: "16px", // large
        xl: "24px", // extra large
        "2xl": "32px", // 2x extra large
      },

      gap: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
    },
  },
  plugins: [],
};
