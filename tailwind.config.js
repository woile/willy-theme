const plugin = require("tailwindcss/plugin");

module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  content: [
    "./src/**/*.{css,html,js,ts,jsx,tsx}",
  ],
  // purge: [],
  theme: {
    extend: {
      inset: {
        "1/2": "50%",
      },
      translate: {
        "-1/2": "-50%",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "contrast-color": "var(--contrast-color)",
        "default-color": "var(--default-color)",
        "inverse-color": "var(--inverse-color)",
        "menu-bg-color": "var(--menu-background)",
        "translation-bg-color": "var(--translation-background)",
      },
    },
  },
  // variants: {
  //   fill: ["responsive", "hover", "focus"],
  // },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`checked${separator}${className}`)}:checked`;
        });
      });
    }),
  ],
};
