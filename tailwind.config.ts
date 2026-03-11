import type { Config } from 'tailwindcss'

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#2DBF6E',
        navy: '#0F1F3D',
        gold: '#F5A623',
        surface: '#F7F9FC',
        sage: '#4CAF82',
        'sage-light': '#E8F5EE',
        'sage-dark': '#2E7D55',
        ink: '#1A1D23',
        slate: '#4A5568',
        mist: '#8898AA',
        cloud: '#E8EDF2',
        snow: '#F7F9FC',
        amber: '#F5A623',
        coral: '#F05A5A',
        sky: '#4A90D9',
        lavender: '#8E7CF3',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

export default config
