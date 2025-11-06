module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b1220',
        'bg-dark': '#0f1724',
        'panel': '#172033',
        'muted': '#98a0b3',
        'brand-blue': '#3b82f6',
        'brand-purple': '#7c3aed',
        'brand-cyan': '#06b6d4'
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      }
    }
  },
  plugins: []
}
