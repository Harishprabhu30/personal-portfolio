import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "#0a0a0a",
        border: "#1f1f1f",
        textPrimary: "#ffffff",
        textSecondary: "#a3a3a3",
        textMuted: "#525252",
      },
      boxShadow: {
        subtle: "0 0 0 1px rgba(255,255,255,0.02)",
        glow: "0 10px 30px rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;