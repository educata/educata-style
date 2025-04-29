import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS } from "../../shared";

const meta: Meta = {
  title: "Components/Button",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button class="btn">Base class</button>
`;
  },
};

export const Variations: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button class="btn">Base</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-black">Black</button>
<button class="btn btn-white">White</button>
`;
  },
};

export const Outline: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button class="btn">Base</button>
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
<button class="btn btn-outline-black">Black</button>
<button class="btn btn-outline-white">White</button>
`;
  },
};

export const Sizes: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button class="btn btn-secondary btn-sm">Secondary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-secondary btn-lg">Secondary</button>
`;
  },
};

export const Disabled: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<button class="btn btn-secondary">Active</button>
<button class="btn btn-secondary" disabled>Disabled</button>
<button class="btn btn-outline-secondary">Active</button>
<button class="btn btn-outline-secondary" disabled>Disabled</button>
`;
  },
};

export const Button: Story = {
  args: {
    variation: "primary",
    size: "default",
    disabled: false,
    outline: false,
  },
  argTypes: {
    variation: {
      control: "select",
      options: VARIATIONS,
    },
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
<div class="btn btn-${args.outline ? `outline-${args.variation}` : args.variation} btn-${
      args.size
    }" ${args.disabled ? "disabled" : ""}>${args.variation}</div>
`;
  },
};
