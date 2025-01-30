/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        border: 'border 4s linear infinite',
      },
      keyframes: {
        border: {
          to: { '--border-angle': '360deg' },
        },
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(100% 100% at 50% 0%, #000 30%, #63e 100%)',
      }
    },

  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["synthwave",
      {
        mytheme: {
          primary: "#ff0000",
          "primary-focus": "#cc0000", // Hover color
          "primary-content": "#ffffff", // Text color
        }
      }
    ]
  },

}