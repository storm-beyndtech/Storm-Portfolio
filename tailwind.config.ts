import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        charcoal: '#1a1a1a',
        bone: '#f4f4f0',
        accent: '#8b0000', // deep red - can be changed
        'accent-muted': '#6b0000',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        grotesk: ['var(--font-grotesk)'],
        distorted: ['var(--font-distorted)'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '0' }],
        'title': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'drift-slow': 'drift 20s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
