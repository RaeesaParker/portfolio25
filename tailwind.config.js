/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Raleway",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Poppins",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        body: [
          "Raleway",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        // Custom emerald variations for brand consistency
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // Primary brand color
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        // Custom accent colors
        accent: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6", // Secondary accent
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
      },
      animation: {
        "gradient-shift": "gradientShift 15s ease infinite",
        "slide-down": "slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "move-stars": "moveStars 50s linear infinite",
        "move-stars-slow": "moveStars 100s linear infinite",
        "move-stars-slower": "moveStars 150s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        slideDown: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        moveStars: {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(-2000px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundSize: {
        400: "400% 400%",
      },
    },
  },
  plugins: [],
};
