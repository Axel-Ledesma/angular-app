/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    backgroundImage: {
      "abrir-menu": "url('/assets/svg/menu.svg')",
      "cerrar-menu": "url('/assets/svg/close.svg')",
    },
  },
};
export const plugins = [];
