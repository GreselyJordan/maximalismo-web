/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maxi-yellow': '#FFE600',
        'maxi-pink': '#FF2E93',
        'maxi-cyan': '#00F0FF',
        'maxi-green': '#00FF66',
        'maxi-purple': '#8A2BE2',
        'maxi-orange': '#FF5E00',
        'maxi-cream': '#FFFDF5',
        'maxi-dark': '#121212',
      },
      fontFamily: {
        dela: ['"Dela Gothic One"', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
        display: ['"Dela Gothic One"', 'sans-serif'],
        retro: ['"Archivo Black"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px 0px #121212',
        'brutal': '5px 5px 0px 0px #121212',
        'brutal-lg': '8px 8px 0px 0px #121212',
        'brutal-xl': '12px 12px 0px 0px #121212',
        'brutal-pink': '6px 6px 0px 0px #FF2E93',
        'brutal-yellow': '6px 6px 0px 0px #FFE600',
      },
      animation: {
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slight': 'bounceSlight 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSlight: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(4px)' },
        }
      }
    },
  },
  plugins: [],
}
