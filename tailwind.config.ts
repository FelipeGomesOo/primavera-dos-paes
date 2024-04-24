import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },

    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1.0625rem", // 17px
      lg: "1.1875rem", // 19px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2.75rem", // 40px
      "5xl": "4.5rem", // 72px
    },
    colors: {
      primary: {
        light: "#717c82",
        DEFAULT: "#53565a",
        dark: "#000",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-courier-prime)"],
      },
      screens: {
        "3xl": "1792px",
      },
      reveal: {
        from: {
          transform: "translateY(100%)",
          opacity: "0",
        },
        to: {
          transform: "translateY(0%)",
          opacity: "1",
        },
      },
    },
  },
  plugins: [],
};
export default config;
