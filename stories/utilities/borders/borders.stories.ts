import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS, PLACEMENTS } from "../../shared";

type BorderArgs = {
  variation: "main" | "primary" | "secondary" | "success" | "danger" | "white" | "black";
  width: 1 | 2 | 3 | 4 | 5;
  radius: "sm" | "lg" | "xl" | "xxl" | "pill" | "circle";
};

const meta: Meta<BorderArgs> = {
  title: "Utilities/Borders",
};

export default meta;
type Story = StoryObj<BorderArgs>;

export const Additive: Story = {
  tags: ["!dev"],
  render: () => {
    const placements = [
      "border",
      ...PLACEMENTS.map((placement) => `border-${placement}`),
    ];

    return `
<div class="d-flex justify-content-center gap-3" data-box-example>
    ${placements.map((placement) => `<div class="${placement} p-5"></div>`).join("")}
</div>
`;
  },
};

export const Subtractive: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border border-0 p-5"></div>
  <div class="border border-top-0 p-5"></div>
  <div class="border border-right-0 p-5"></div>
  <div class="border border-bottom-0 p-5"></div>
  <div class="border border-left-0 p-5"></div>
</div>
`;
  },
};

export const Color: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex justify-content-center gap-3" data-box-example>
    ${VARIATIONS.map(
      (variation) => `<div class="border border-color-${variation} p-5"></div>`
    ).join("")}
</div>
`;
  },
};

export const Width: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border border-1 p-5"></div>
  <div class="border border-2 p-5"></div>
  <div class="border border-3 p-5"></div>
  <div class="border border-4 p-5"></div>
  <div class="border border-5 p-5"></div>
</div>
`;
  },
};

export const Radius: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border rounded p-5"></div>
</div>
`;
  },
};

export const RadiusSize: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border rounded p-5"></div>
  <div class="border rounded-sm p-5"></div>
  <div class="border rounded-lg p-5"></div>
  <div class="border rounded-xl p-5"></div>
  <div class="border rounded-xxl p-5"></div>
  <div class="border rounded-pill p-5"></div>
  <div class="border rounded-circle p-5"></div>
</div>
`;
  },
};

export const Border: Story = {
  args: {
    variation: "main",
    width: 1,
    radius: "sm",
  },
  argTypes: {
    variation: {
      control: "select",
      options: VARIATIONS,
    },
    width: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    radius: {
      control: "select",
      options: ["rounded", "sm", "lg", "xl", "xxl", "pill", "circle"],
    },
  },
  render: (args) => {
    return `
<div class="d-flex justify-content-center align-items-center" data-box-example>
    <div class="border border-color-${args.variation} border-${args.width} rounded rounded-${args.radius} p-5"></div>
</div>
`;
  },
};
