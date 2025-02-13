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
      backgroundColor: {
        page: 'var(--color-background)',
        header: 'var(--color-background-2)',
        card: 'var(--color-background-2)',
        btn: 'var(--color-secondary)',
      },
      textColor: {
        primary: 'var(--color-primary)',
      },
      borderColor: {
        card: 'var(--color-primary)',
        btn: 'var(--color-primary)',
      },
    },
  },
  plugins: [],
} satisfies Config;
