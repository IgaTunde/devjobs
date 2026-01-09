import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'slate': {
          100: '#F4F6F8',
          300: '#9DAEC2', 
          500: '#6E8098',
          900: '#19202D',
          950: '#121721',
        },
        'indigo': {
          300: '#939BF4',
          500: '#5964E0',
        }
      },
    },
  },
  plugins: [],
};

export default config;
