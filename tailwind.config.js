/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "colorGray":"#FAFAFA",
        "colorBlack":"#000000",
        "colorBrown":"#8C2703",
        "colorOrange":"#F24405",
        "colorWhite":"#FFFFFF",
        "colorBorder":"#736F5C33",
        "colorBerge":"#736F5C",
        "colorBorderWhite":"#FFFFFF33",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        tomorrow: ['Tomorrow','sans-serif'],
      },
    },
  },
  plugins: [],
}


