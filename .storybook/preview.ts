import type { Preview } from "@storybook/html";

import "../stories/educata.min.css";
import "../stories/stories.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
