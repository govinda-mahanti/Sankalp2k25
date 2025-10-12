/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out 0.5s backwards',
        'card-fade-in': 'cardFadeIn 0.8s ease-out backwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'ring-pulse': 'ringPulse 2s ease-in-out infinite',
        'icon-float': 'iconFloat 3s ease-in-out infinite',
        'phone-ring': 'phoneRing 2s ease-in-out infinite',
        'particle-drift': 'particleDrift 15s ease-in-out infinite',
        'sparkle': 'sparkleAnim 2s ease-in-out infinite',
        'scan': 'scan 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out backwards',
      },
      keyframes: {
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        cardFadeIn: {
          'from': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 183, 0, 0.6), 0 0 40px rgba(255, 183, 0, 0.4)' },
          '50%': { textShadow: '0 0 30px rgba(255, 183, 0, 0.9), 0 0 60px rgba(255, 183, 0, 0.6)' },
        },
        ringPulse: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: '1' },
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        phoneRing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-15deg)' },
          '20%, 40%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0deg)' },
        },
        particleDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '25%': { transform: 'translate(30px, -30px) scale(1.5)', opacity: '0.8' },
          '50%': { transform: 'translate(-20px, -60px) scale(1)', opacity: '0.5' },
          '75%': { transform: 'translate(40px, -40px) scale(1.3)', opacity: '0.7' },
        },
        sparkleAnim: {
          '0%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.5) rotate(180deg)' },
          '100%': { opacity: '0', transform: 'scale(0) rotate(360deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(251, 146, 60, 0.8), 0 0 60px rgba(251, 146, 60, 0.4)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}