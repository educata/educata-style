import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Z-index",
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
<div class="box-wrapper" style="height: 300px">
  <style>
    .box {
      background-color: var(--ec-color-green);
    }
    .box span {
      position: absolute;
      bottom: 0;
      right: 5px;
    }
  </style>
  <div class="z-5 position-absolute box p-5 rounded-3"><span>z-5</span></div>
  <div class="z-4 position-absolute box p-5 rounded-3" style="top: 1rem; left: 1rem"><span>z-4</span></div>
  <div class="z-3 position-absolute box p-5 rounded-3" style="top: 2rem; left: 2rem"><span>z-3</span></div>
  <div class="z-2 position-absolute box p-5 rounded-3" style="top: 3rem; left: 3rem"><span>z-2</span></div>
  <div class="z-1 position-absolute box p-5 rounded-3" style="top: 4rem; left: 4rem"><span>z-1</span></div>
  <div class="z-0 position-absolute box p-5 rounded-3" style="top: 5rem; left: 5rem"><span>z-0</span></div>
  <div class="z-n1 position-absolute box p-5 rounded-3" style="top: 6rem; left: 6rem"><span>zn-1</span></div>
</div>
`;
  },
};

export const ZIndex: Story = {
  args: {
    zIndex: "1",
  },
  argTypes: {
    zIndex: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5"],
    },
  },
  render: (args) => {
    return `
<div class="w-100 position-relative" style="height: 300px; max-width: 300px;">
  <div class="position-absolute z-${args.zIndex} box box-secondary-active p-5 rounded-3 p-3"></div>
  <div class="position-absolute box box-active p-5 rounded-3" style="top: 3rem; left: 3rem"></div>
</div>
`;
  },
};
