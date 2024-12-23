import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--font-noto-sans-tc)"],
        satoshi: ["var(--font-satoshi)"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        storyProgress: "storyProgress 5s linear",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)", opacity: "0" },
          "10%": { transform: "translateX(-10%)", opacity: "1" },
          "90%": { transform: "translateX(-90%)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        storyProgress: {
          "0%": { transform: "scaleX(0%)", transformOrigin: "left" },
          "100%": { transform: "scaleX(100%)", transformOrigin: "left" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ocean: "#00CAD7",
        "ocean-light": "#AAF5FA",
        "t-white": "#F5FDFF",
        "t-black": {
          100: "#E5EEF0",
          500: "#50535E",
          600: "#363841",
          700: "#161616",
        },
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
