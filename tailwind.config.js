/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          'blue': {
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          'indigo': {
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            950: '#1e1b4b',
          },
          'gray': {
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          }
        },
        boxShadow: {
          'glow-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
          'glow-indigo': '0 0 15px rgba(79, 70, 229, 0.5)',
        },
      },
    },
    plugins: [],
  }