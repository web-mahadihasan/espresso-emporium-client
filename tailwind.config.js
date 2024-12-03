import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: [ "Raleway", 'sans-serif'], 
        rancho: ["Rancho", 'serif'], 
      },
      backgroundImage: {
        'nav-Bg': "url('./assets/images/nav-banner.png')",
        'footer-Bg': "url('./assets/images/footer-bg.png')",
        'copy-bg': "url('./assets/images/copy-bg.png')",
        'banner-1': "url('https://i.ibb.co.com/Br2Qhpk/banner-1.png')",
        'coffe-bg': "url('https://i.ibb.co.com/wLhRTFb/1.png')",
      },
      colors: {
        primary: "#331A15",
      },
    },
  },
  plugins: [daisyui],
}

