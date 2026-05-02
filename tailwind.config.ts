import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8A00',
          dark: '#E67300',
          light: '#FFB347',
        },
        secondary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
          light: '#4D94FF',
        },
        accent: {
          DEFAULT: '#00C896',
          dark: '#00A87D',
          light: '#33D4AC',
        },
        background: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          muted: '#F1F5F9',
        },
        surface: '#FFFFFF',
        'text-primary': '#0A0E1A',
        'text-secondary': '#475569',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(255, 138, 0, 0.25)',
        'glow-secondary': '0 0 30px rgba(0, 102, 255, 0.25)',
        'glow-accent': '0 0 30px rgba(0, 200, 150, 0.25)',
        card: '0 4px 24px rgba(10, 14, 26, 0.06)',
        'card-hover': '0 8px 48px rgba(10, 14, 26, 0.12)',
        xl: '0 20px 60px rgba(10, 14, 26, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'draw': 'draw 3s ease-in-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 138, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 138, 0, 0.8)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(255,138,0,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0,102,255,0.08) 0%, transparent 50%)',
        'section-mesh': 'radial-gradient(ellipse at top left, rgba(255,138,0,0.05) 0%, transparent 40%), radial-gradient(ellipse at bottom right, rgba(0,200,150,0.05) 0%, transparent 40%)',
      },
    },
  },
  plugins: [],
}

export default config
