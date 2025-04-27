import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Sizing",
};

export default meta;
type Story = StoryObj;

export const Width: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="w-25 p-3 box">Width 25%</div>
<div class="w-50 p-3 box">Width 50%</div>
<div class="w-75 p-3 box">Width 75%</div>
<div class="w-100 p-3 box">Width 100%</div>
<div class="w-auto p-3 box">Width auto</div>
`;
  },
};

export const Height: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div style="height: 100px;" class="d-flex gap-3 box-wrapper">
  <div class="h-25 d-inline-block box">Height 25%</div>
  <div class="h-50 d-inline-block box">Height 50%</div>
  <div class="h-75 d-inline-block box">Height 75%</div>
  <div class="h-100 d-inline-block box">Height 100%</div>
  <div class="h-auto d-inline-block box">Height auto</div>
</div>
`;
  },
};

export const Sizing: Story = {
  args: {
    width: "25",
    height: "25",
    viewport: false,
  },
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  argTypes: {
    width: {
      control: "select",
      options: ["25", "50", "75", "100"],
    },
    height: {
      control: "select",
      options: ["25", "50", "75", "100"],
    },
  },
  render: (args) => {
    return `
<div class="vw-100 vh-100 d-flex justify-content-center align-items-center">
  <div class="${args.viewport ? "v" : ""}w-${args.width} h-${
      args.height
    } p-3 box d-flex justify-content-center align-items-center">Width ${args.width}${
      args.viewport ? "vw" : "%"
    } & Height ${args.height}${args.viewport ? "vh" : "%"}</div>
</div>
`;
  },
};
