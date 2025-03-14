/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/pages/**/*.{js,ts,jsx,tsx}',       // Diretórios padrão
    '.src/components/**/*.{js,ts,jsx,tsx}', // Componentes personalizados
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}