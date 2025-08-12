module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0,37,84,0.9)",
        primarySolid: "#002554",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
      },
      keyframes: {
        "bounce-three-times": {
          "0%,20%,50%,80%,100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-14px)" },
          "60%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "bounce-3": "bounce-three-times 1s ease 0s 3",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
