import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: "dark", value: "#96A7B0" },
        // { name: "dark", value: "#171527" },
        { name: "light", value: "#f5fefc" },
      ],
      // 👇 Specify which background is shown by default
      default: "dark",
    },
  },
};

export default preview;
