import { create } from "@storybook/theming";

const glamoTheme = create({
  base: "dark",

  // colorPrimary: "#ff0000", // bright magenta
  colorSecondary: "#C5CED3", // bright cyan

  // UI colors
  appBg: "#f5fefc", // black background
  appContentBg: "#effbf9", // dark gray content background
  appBorderColor: "#e8f3f2", // magenta border
  appBorderRadius: 20,

  // Typography
  fontBase: '"Oswald", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#96A7B0", // bright green text
  textInverseColor: "#f5fefc", // magenta inverse text

  // Toolbar colors
  barTextColor: "#96A7B0", // cyan toolbar text
  barSelectedColor: "#e9f8f5", // magenta selected item
  barBg: "#f5fefc", // very dark toolbar background

  // // Form colors
  // inputBg: "#00ff00",
  // inputBorder: "#0000ff",
  // inputTextColor: "#4b0082",
  // inputBorderRadius: 10,

  brandTitle: "GlaMo",
  // brandUrl: "https://example.com",
  brandImage: "../src/assets/svgviewer-png-output.png",
});

export default glamoTheme;
