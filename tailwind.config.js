/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "presets/**/*.{js,vue,ts}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        borderColor: "var(--border-color)",
        themeGray: "var(--theme-gray)",
        colorBody: "var(--body-bg-color)",
        gradientColorFrom: "var(--gradient-color-from)",
        gradientColorTo: "var(--gradient-color-to)",
        darkColor: "var(--dark-color)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "10rem",
        },
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      borderRadius: {
        base: "8px",
      },
      keyframes: {
        "animate-bounce-x": {
          "0%, 100%": { transform: "translateX(-5%)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "bounce-x": "animate-bounce-x 1s infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      const sizes = [100, 150, 200, 250, 300, 350, 400, 450, 500];
      sizes.forEach((size) => {
        newUtilities[`.auto-fit-${size}`] = {
          "grid-template-columns": `repeat(auto-fit, minmax(${size}px, 1fr))`,
        };
      });

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
