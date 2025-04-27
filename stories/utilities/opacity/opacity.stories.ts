import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Opacity",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="opacity-100 d-inline box p-3">100%</div>
<div class="opacity-75 d-inline box p-3">75%</div>
<div class="opacity-50 d-inline box p-3">50%</div>
<div class="opacity-25 d-inline box p-3">25%</div>
<div class="opacity-0 d-inline box p-3">0%</div>
`;
  },
};

export const Opacity: Story = {
  args: {
    opacity: "50",
  },
  argTypes: {
    opacity: {
      control: "select",
      options: ["0", "25", "50", "75", "100"],
    },
  },
  render: (args) => {
    return `
<div class="opacity-${args.opacity} d-inline box p-3">${args.opacity}%</div>
`;
  },
};
