/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "head-color": "var(--head-color)",
        "text-color": "var(--text-color)",
        "card-color": "var(--card-color)",
        "spicial-color": "var(--spicial-color)",
      },
      // backgroundImage: {
      //   "footer-texture": "url('../images/footer.jpg')",
      // },
    },
  },
  plugins: [],
};
