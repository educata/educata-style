import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS } from "../../shared";

const meta: Meta = {
  title: "Components/Close button",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button type="button" class="btn-close" aria-label="Close"></button>
`;
  },
};

export const Disabled: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button type="button" class="btn-close" aria-label="Close" disabled></button>
`;
  },
};

export const Black: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button type="button" class="btn-close btn-close-black" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-black" aria-label="Close" disabled></button>
`;
  },
};

export const Sizes: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button type="button" class="btn-close btn-close-sm" aria-label="Close"></button>
<button type="button" class="btn-close" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-lg" aria-label="Close"></button>
`;
  },
};

export const Button: Story = {
  args: {
    size: "default",
    dark: false,
    disabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    return `
<div class="${args.dark ? "bg-white" : "bg-main"} p-3">
  <button type="button" class="btn-close btn-close-${args.size} ${
      args.dark ? "btn-close-black" : ""
    }" aria-label="Close" ${args.disabled ? "disabled" : ""}></button>
</div>
`;
  },
};
