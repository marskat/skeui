import { create } from "@storybook/theming";

const glamoTheme = create({
  base: "dark",

  colorSecondary: "#e75a7c",

  // UI colors
  appBg: "#2c363f",
  appContentBg: "#2c363f",
  appBorderColor: "#e75a7c",
  appBorderRadius: 10,

  // Typography
  fontBase: '"Oswald", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#f2f5ea",
  textInverseColor: "#2c363f",

  // Toolbar colors
  barTextColor: "#D6DBD2",
  barSelectedColor: "#f2f5ea",
  barBg: "#323E48",

  brandTitle: "@marskat/skeui",
  // brandUrl: "https://example.com",
  // brandImage: "../src/assets/svgviewer-png-output.png",
});

export default glamoTheme;
