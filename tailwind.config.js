/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0f0e", // fondo principal (negro verdoso)
        surface: "#101614", // secciones
        card: "#18221e", // bloques internos
        accent: "#17e39a", // verde menta
        ink: "#e8f3ef", // texto principal
        muted: "#9fb1aa", // texto secundario
      },
    },
  },
  plugins: [],
};
