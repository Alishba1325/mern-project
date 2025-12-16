// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 1. FINAL REVISED custom background image utility for corner/side GLOW
      backgroundImage: {
        // Focuses the glow in the bottom corners, fading to transparent quickly (15%)
        'radial-glow': 'radial-gradient(at 0% 100%, rgba(0, 186, 255, 0.1) 0, transparent 15%), radial-gradient(at 100% 100%, rgba(0, 186, 255, 0.1) 0, transparent 15%)',
      },
      // 2. Custom dark colors (Already Correct)
      colors: {
        'dark-bg': '#0d1114',
        'card-bg': '#1a1e22',
        'primary-blue': '#00baff',
      }
    },
  },
  plugins: [],
}
