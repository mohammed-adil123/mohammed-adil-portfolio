/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch Kinetic Terminal Theme Tokens
        surface: "#10131a",
        "surface-dim": "#10131a",
        "surface-bright": "#363941",
        "surface-container-lowest": "#0b0e15",
        "surface-container-low": "#191b23",
        "surface-container": "#1d1f27",
        "surface-container-high": "#272a32",
        "surface-container-highest": "#32353d",
        "surface-variant": "#32353d",
        
        "on-surface": "#e1e2ec",
        "on-surface-variant": "#c2c6d6",
        "inverse-surface": "#e1e2ec",
        "inverse-on-surface": "#2d3038",
        
        outline: "#8c909f",
        "outline-variant": "#424754",
        
        primary: "#adc6ff",
        "on-primary": "#002e6a",
        "primary-container": "#4d8eff",
        "on-primary-container": "#00285d",
        "primary-fixed": "#d8e2ff",
        "primary-fixed-dim": "#adc6ff",
        "on-primary-fixed": "#001a42",
        "on-primary-fixed-variant": "#004395",
        "inverse-primary": "#005ac2",
        
        secondary: "#d0bcff",
        "on-secondary": "#3c0091",
        "secondary-container": "#571bc1",
        "on-secondary-container": "#c4abff",
        "secondary-fixed": "#e9ddff",
        "secondary-fixed-dim": "#d0bcff",
        "on-secondary-fixed": "#23005c",
        "on-secondary-fixed-variant": "#5516be",
        
        tertiary: "#4cd7f6",
        "on-tertiary": "#003640",
        "tertiary-container": "#009eb9",
        "on-tertiary-container": "#002f38",
        "tertiary-fixed": "#acedff",
        "tertiary-fixed-dim": "#4cd7f6",
        "on-tertiary-fixed": "#001f26",
        "on-tertiary-fixed-variant": "#004e5c",
        
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        
        background: "#10131a",
        "on-background": "#e1e2ec",

        // Custom High-Craft Accent Aliases
        "accent-blue": "#3B82F6",
        "accent-violet": "#8B5CF6",
        "accent-cyan": "#06B6D4",
        "accent-emerald": "#10B981",
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['Geist', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(59, 130, 246, 0.15)',
        'glow-primary': '0 0 20px rgba(59, 130, 246, 0.35)',
        'glow-secondary': '0 0 20px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 16px rgba(6, 182, 212, 0.35)',
        'glow-emerald': '0 0 12px rgba(16, 185, 129, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
