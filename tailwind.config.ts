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
        sm: "1rem",
        md: "1.5rem",
        lg: "1.5rem",
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
      "6xl": "5.75rem", // 72px
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
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(150%)",
          },
        },
        reveal: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fixedMenu: {
          to: {
            boxShadow: "0 5px 5px -3px rgba(0, 0, 0, 0.26)",
            background: "#fff",
            right: "2rem",
            top: "1rem",
            height: "4rem",
            borderRadius: "99rem",
            opacity: "1",
            position: "fixed",
          },
        },
      },
      animation: {
        "fade-out-down": "fade-out-down linear forwards",
        reveal: "reveal forwards cubic-bezier(0.165, 0.84, 0.44, 1)",
        fixedMenu: "fixedMenu 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
