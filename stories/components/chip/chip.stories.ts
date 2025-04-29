import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS } from "../../shared";

const meta: Meta = {
  title: "Components/Chip",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex flex-column gap-3">
  <div class="chip">Default chip</div>
  <div class="chip chip-primary">Primary chip</div>
  <div class="chip chip-secondary">Secondary chip</div>
  <div class="chip chip-success">Success chip</div>
  <div class="chip chip-danger">Danger chip</div>
  <div class="chip chip-white">White chip</div>
  <div class="bg-white d-flex flex-column gap-3 p-3">
    <div class="chip chip-black">Black chip</div>
    <div class="chip chip-main">Main chip</div>
  </div>
</div>
`;
  },
};

export const Chip: Story = {
  args: {
    chip: "primary",
  },
  argTypes: {
    chip: {
      control: "select",
      options: VARIATIONS,
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    return `
<div class="chip chip-${args.chip}">.chip-${args.chip}</div>
`;
  },
};
