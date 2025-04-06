import type { Preview } from "@storybook/html";

import "../stories/educata.min.css";
import "../stories/stories.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    options: {
      storySort: {
        order: ["*", ["Introduction", "introduction", "*"]],
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#0c0c16",
        },
      ],
    },
  },
};

export default preview;
