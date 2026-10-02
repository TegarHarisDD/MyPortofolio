/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        strong: '550',
      },
      colors: {
        ink: 'var(--ink)',
        'on-ink': 'var(--on-ink)',
        muted: 'var(--ink-muted)',
        surface: 'var(--surface)',
        input: 'var(--surface-input)',
        chip: 'var(--surface-chip)',
        hairline: 'var(--hairline)',
        // aliases kept for gradual migration
        paper: 'var(--surface)',
        line: 'var(--hairline)',
        accent: 'var(--ink)',
      },
      borderColor: {
        DEFAULT: 'var(--hairline)',
      },
      borderRadius: {
        control: '8px',
        panel: '16px',
        prompt: '28px',
        pill: '9999px',
      },
      letterSpacing: {
        body: '-0.006em',
        title: '-0.015em',
        display: '-0.02em',
      },
    },
  },
  plugins: [],
}
