import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS } from "../../shared";

const meta: Meta = {
  title: "Components/Button Group",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
`;
  },
};

export const Mixed: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
`;
  },
};

export const Outlined: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
`;
  },
};

export const OutlinedMixed: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-success">Right</button>
</div>
`;
  },
};

export const Vertical: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div
  class="btn-group btn-group-vertical"
  role="group"
  aria-label="Vertical button group"
>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
`;
  },
};

export const Sizes: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
<div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
`;
  },
};

export const Group: Story = {
  args: {
    count: 3,
    vertical: false,
    size: "default",
    variation: "secondary",
  },
  argTypes: {
    count: {
      control: {
        type: "range",
        min: 1,
        max: 9,
      },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    variation: {
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
<div class="btn-group btn-group-${args.size} ${
      args.vertical ? "btn-group-vertical" : ""
    }" role="group" aria-label="Basic example">
  ${new Array(args.count)
    .fill(0)
    .map((_, i) => {
      return `<button type="button" class="btn btn-${args.variation}">${
        i + 1
      } Element</button>`;
    })
    .join("")}
</div>
`;
  },
};
