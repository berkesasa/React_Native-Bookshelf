/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceee: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(50px)' },
        }
      },
      animation: {
        'bounceee': 'bounceee 3s linear infinite',
      }
    },
  },
  plugins: [],
}

