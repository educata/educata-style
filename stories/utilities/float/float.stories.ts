import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Float",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="float-left">Float Left</div><br />
<div class="float-right">Float Right</div><br />
<div class="float-none">Float none</div>
`;
  },
};

export const Float: Story = {
  args: {
    float: "none",
  },
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  argTypes: {
    float: {
      control: "select",
      options: ["none", "left", "right"],
    },
  },
  render: (args) => {
    return `
<div class="float-${args.float}">Float ${args.float}</div>
`;
  },
};
