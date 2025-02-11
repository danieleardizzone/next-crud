import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pageBg: 'var(--color-background)',
        headerBg: 'var(--color-background-2)',
        cardBg: 'var(--color-background-2)',
        btnBg: 'var(--color-secondary)',
        text: 'var(--color-primary)',
        cardBorder: 'var(--color-primary)',
        btnBorder: 'var(--color-primary)',
      }
    },
  },
  plugins: [],
} satisfies Config;
