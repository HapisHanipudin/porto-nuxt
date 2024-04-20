import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
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
