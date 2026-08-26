/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#FFFFFF",
        bgSecondary: "#F5F7FA",
        bgSurface: "#FAFAFA",
        textNavy: "#0F1B2D",
        textSlate: "#475569",
        textMuted: "#64748B",
        accentBlue: "#0057D8",
        accentBlueHover: "#0047B3",
        borderColor: "#E2E8F0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
