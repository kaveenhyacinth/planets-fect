/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./features/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        'bg-color': 'var(--bg-color)',
        'line-color': 'var(--line-color)',
      }
    },
  },
  plugins: [],
}

