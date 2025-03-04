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
  },
};

export default preview;
