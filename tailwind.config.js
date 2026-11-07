/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070A10',
          900: '#0B0F17',
          850: '#0E1420',
          800: '#121A29',
          750: '#162033',
          700: '#1A263D',
          600: '#243452',
        },
        brand: {
          amber: '#F59E0B',
          orange: '#F97316',
          yellow: '#FBBF24',
          darkOrange: '#EA580C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        signature: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(245, 158, 11, 0.25)',
        'glow': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-lg': '0 0 40px -5px rgba(245, 158, 11, 0.45)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 75% 30%, rgba(245, 158, 11, 0.12) 0%, rgba(249, 115, 22, 0.05) 40%, transparent 75%)',
        'card-gradient': 'linear-gradient(180deg, rgba(22, 32, 51, 0.7) 0%, rgba(14, 20, 32, 0.85) 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};

