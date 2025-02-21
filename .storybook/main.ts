import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  managerHead: (head) => `
    ${head}
    <meta name="title" content="Educata Styles Storybook" />
    <meta name="description" content="This is the Educata Styles documentation" />
    <meta property="og:title" content="Educata Styles Storybook" />
    <meta property="og:description" content="This is the Educata Styles documentation" />
    <meta
      property="og:image"
      content="https://raw.githubusercontent.com/educata/educata-style/stories/assets/logo.png"
    />
    <link
      rel="shortcut icon"
      href="https://raw.githubusercontent.com/educata/educata-style/stories/assets/logo.png"
      type="image/x-icon"
    />
  `,
};
export default config;
