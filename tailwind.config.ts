import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      animation: {
        beat: "beat 0.7s ease-in-out infinite",
        shake: "shake 2s linear infinite",
      },
      keyframes: {
        beat: {
          "0%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        shake: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        dark: {
          900: "#0a0a0a",
          800: "#141414",
          700: "#121212",
          600: "#181818",
          500: "#212121",
          400: "#282828",
          300: "#313131",
          200: "#383838",
          100: "#424242",
        },
      },
    },
  },
  plugins: [],
};
