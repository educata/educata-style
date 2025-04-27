import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Overflow",
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
<div class="d-flex gap-3">
  <div class="overflow-auto box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-hidden box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-visible box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-scroll box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
  </div>
</div>
`;
  },
};

export const Overflow: Story = {
  args: {
    overflow: "auto",
    maxWidth: "200px",
    maxHeight: "200px",
  },
  argTypes: {
    overflow: {
      control: "select",
      options: ["auto", "hidden", "scroll", "visible"],
    },
  },
  render: (args) => {
    return `
<div class="overflow-${args.overflow} fs-xxl box p-3" style="max-width: ${args.maxWidth}; max-height: ${args.maxHeight}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid incidunt eum aperiam qui eligendi nesciunt reiciendis quisquam atque numquam vero minima deleniti hic facere saepe, totam laboriosam commodi dolorum explicabo!</div>
`;
  },
};
