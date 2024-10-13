/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"selector",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'390px'
      },
      fontFamily:{
        Roboto:["Roboto", "sans-serif"],
        JetBrainsMono:["JetBrains Mono", "monospace"]
      },
      colors: {
      primary: '#FF8225',
      secondary: '#173B45',
      tertiary:'#F8EDED',
    },
    keyframes:{
      fadeInRight: {
        from: {
          opacity: 0,
          
          transform: "translateX(100px)",
        },
        to: {
          opacity: 1,
        },
      },
      fadeInLeft: {
        from: {
          opacity: 0,
          transform: "translateX(-100px)",
        },
        to: {
          opacity: 1,
          
        },
      },
      fadeInTop:{
        from: {
          opacity: 0,
          
          transform: "translateY(-100px)",
        },
        to: {
          opacity: 1,
        },
      },
      fadeInBottom:{
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
          transform: "translateY(100px)",
        },
      },

      bounceRight: {
        "0%, 100%" :{
          transform: "translateX(25%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateX(0)",
          animationTimingFunction:" cubic-bezier(0, 0, 0.2, 1)"
        }
      },
      scale:{
        "0%":{
          scale:0
        },
        "100%":{
          scale:1
        }
      }
    },
    animation: {
      fadeInRight: "fadeInRight 1s ease-out",
      fadeInLeft: "fadeInLeft 1s ease-out",
      fadeInTop: "fadeInTop 1s ease-out",
      fadeInBottom: "fadeInBottom 1s ease-out",
      bounceRight:"bounceRight 1s infinite",
      scale: "scale 1s ease-out",
    },
    },
    
  },
  plugins: [
    require("tailwindcss-animated"),
  ],
}

