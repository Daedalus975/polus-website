import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "Inter", "system-ui", "-apple-system", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        polus: {
          paper: "#FEFFFF",
          forest: "#0D251C",
          gold: "#C2A319",
          mint: "#B1E3C7",
          emerald: "#116238",
          surface1: "#102D22",
          surface2: "#143427",
          surface3: "#183A2B"
        }
      },
      borderRadius: { 
        sm: "10px",
        md: "14px", 
        lg: "18px", 
        xl: "24px" 
      },
      boxShadow: { 
        card: "0 10px 30px rgba(0,0,0,0.30)", 
        cardHover: "0 16px 50px rgba(0,0,0,0.35)" 
      },
      backdropBlur: {
        navbar: "14px"
      }
    }
  },
  plugins: []
};

export default config;
