module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Hanken Grotesk', sans-serif",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        red: {
          light: "hsl(0, 100%, 67%)",
        },
        orange: {
          yellow: "hsl(39, 100%, 56%)",
        },
        green: {
          teal: "hsl(166, 100%, 37%)",
        },
        blue: {
          cobalt: "hsl(234, 85%, 45%)",
          light_slate: "hsl(252, 100%, 67%)",
          light_royal: "hsl(241, 81%, 54%)",
          violet: "hsla(256, 72%, 46%, 1)",
          persian: "hsla(241, 72%, 46%, 0)",
          pale: "hsl(221, 100%, 96%)",
          dark_gray: "hsl(224, 30%, 27%)",
        },
        lavendar: {
          light: "hsl(241, 100%, 89%)",
        },
      },
    },
  },
  plugins: [],
};
