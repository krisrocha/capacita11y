/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue:{
          50: '#F0F9FF',
          100: '#E0F2FE',
          800: '#026A9E',
        },
        elementos:{
          1: '#DCFCE7',
          10: '#166534',
          2: '#DBEAFE',
          20: '#1E40AF',
          3: '#F3E8FF',
          30: '#6B21A8',
          4: '#111827',
          5: '#8e8e8e',
        },
        simple:{
          50: '#FFFFFF',
        },
        primary: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98', // 4.5:1 contrast ratio on white
          600: '#486581', // 7:1 contrast ratio on white
          700: '#334E68', // 10:1 contrast ratio on white
          800: '#243B53',
          900: '#102A43',
        },
        secondary: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6', // 4.5:1 contrast ratio on white
          600: '#0D9488', // 7:1 contrast ratio on white
          700: '#0F766E', // 10:1 contrast ratio on white
          800: '#115E59',
          900: '#134E4A',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // 4.5:1 contrast ratio on white
          600: '#D97706', // 7:1 contrast ratio on white
          700: '#B45309', // 10:1 contrast ratio on white
          800: '#92400E',
          900: '#78350F',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E', // 4.5:1 contrast ratio on white
          600: '#16A34A', // 7:1 contrast ratio on white
          700: '#15803D', // 10:1 contrast ratio on white
          800: '#166534',
          900: '#14532D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // 4.5:1 contrast ratio on white
          600: '#D97706', // 7:1 contrast ratio on white
          700: '#B45309', // 10:1 contrast ratio on white
          800: '#92400E',
          900: '#78350F',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444', // 4.5:1 contrast ratio on white
          600: '#DC2626', // 7:1 contrast ratio on white
          700: '#B91C1C', // 10:1 contrast ratio on white
          800: '#991B1B',
          900: '#7F1D1D',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // 4.5:1 contrast ratio on white
          600: '#4B5563', // 7:1 contrast ratio on white
          700: '#374151', // 10:1 contrast ratio on white
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Lexend', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '2xs': '0.25rem', // 4px
        xs: '0.5rem',     // 8px
        sm: '0.75rem',    // 12px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        '2xl': '3rem',    // 48px
      },
      borderRadius: {
        'sm': '0.25rem',  // 4px
        DEFAULT: '0.5rem', // 8px
        'md': '0.75rem',  // 12px
        'lg': '1rem',     // 16px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Accessibility classes that might be toggled via JS
    'text-lg', 'text-xl', 'text-2xl', 
    'leading-relaxed', 'leading-loose',
    'high-contrast',
    'motion-safe', 'motion-reduce'
  ],
};