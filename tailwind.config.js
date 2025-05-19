/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // Custom animations for component effects
      animation: {
        backgroundZoom: 'backgroundZoom 14s ease-in-out infinite alternate',
        gradientShift: 'gradientShift 10s ease infinite',
        fadeInUp: 'fadeInUp 1.5s ease-out',
        popIn: 'popIn 2s ease-in-out',
        fadeIn: 'fadeIn 2s ease-in',
      },
      // Keyframes for the custom animations
      keyframes: {
        backgroundZoom: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.04)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};