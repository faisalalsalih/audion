// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        charcoal: "#0F172A", // Primary text
        orange: "#F97316",   // Accent
        beige: "#F3F4F6",    // Secondary / sections
        white: "#FFFFFF",    // Main background
        yellow: "#FACC15",   // Highlight / warning
        red: "#DC2626",      // Error (optional)
      },
      backgroundImage: {
        "nav-focus":
          "linear-gradient(270deg, rgba(15, 23, 42, 0.06) 0%, rgba(15, 23, 42, 0.00) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

