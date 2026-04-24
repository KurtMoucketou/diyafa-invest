/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nouvelle palette plus lumineuse
        cream: '#F5F0E8',      // Beige clair élégant
        dark: '#2C2C2C',        // Gris très foncé (remplace le noir)
        gold: '#C6A43F',        // Doré plus lumineux
        goldLight: '#E8D5A3',   // Doré clair
        marble: '#F0EBE3',      // Blanc marbre
        accent: '#4A90E2',      // Bleu lumineux pour accents
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, rgba(245,240,232,0.8), rgba(200,200,200,0.1))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gentle-spin': 'gentleSpin 20s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentleSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}