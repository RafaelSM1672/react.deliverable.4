/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxSizing:'border-box',
    fontFamily: {
      'Neue': ['Helvetica Neue', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        "purple-p": "#555A88",
        "red-p": "#D85D5D",
        "black-c": "#302F2F",
        "black-t": "#0F0F2D",
        "borderColor": "#E5E5E5",
        "buttonTrashBG": "#D85D5D",
        "buttonTrashBorder": "#D93F3F",
        "buttonEditBG": "#F6F6F6",
        "buttonEditBorder": "#BDBDBD"
      }
    },
  },
  plugins: [],
}

