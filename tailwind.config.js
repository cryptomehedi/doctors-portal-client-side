module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg' : "url(./../src/assets/images/bg.png)",
        'appointment' : "url(./../src/assets/images/appointment.png)",
        'footer' : "url(./../src/assets/images/footer.png)",
        'footer2' : "url(./../src/assets/images/footer2.png)",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}