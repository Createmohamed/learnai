module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: "#faf5f5",
          100: "#f5e8e8",
          200: "#e8c8c8",
          300: "#d4a0a0",
          400: "#b87070",
          500: "#8B2D3C",
          600: "#722431",
          700: "#5C1C27",
          800: "#4A151E",
          900: "#3A0F17",
          950: "#1F070C",
        },
        wine: {
          500: "#6B1E2A",
          600: "#551721",
          700: "#401119",
          800: "#2D0B11",
        },
        cream: {
          50: "#FDFBF7",
          100: "#FAF6EF",
          200: "#F5EDE0",
          300: "#EDE0CB",
        },
        gold: {
          100: "#F5E6C8",
          200: "#E8D4A8",
          300: "#C9A961",
          400: "#A8884A",
          500: "#8B6D35",
        },
        ink: {
          900: "#1F070C",
          800: "#2D0B11",
          700: "#401119",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h2": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h3": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.25" }],
      },
      spacing: {
        "section": "clamp(4rem, 10vw, 8rem)",
        "section-sm": "clamp(2.5rem, 6vw, 5rem)",
      },
      boxShadow: {
        "premium": "0 25px 50px -12px rgba(58, 15, 23, 0.4)",
        "card": "0 4px 24px rgba(58, 15, 23, 0.15)",
        "glow": "0 0 60px rgba(139, 45, 60, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
