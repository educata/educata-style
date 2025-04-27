import { Meta, StoryObj } from "@storybook/html";

const cursorOptions = [
  "pointer",
  "default",
  "none",
  "move",
  "text",
  "wait",
  "help",
  "progress",
  "not-allowed",
  "all-scroll",
  "col-resize",
  "row-resize",
  "n-resize",
  "e-resize",
  "s-resize",
  "w-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
];

const meta: Meta = {
  title: "Utilities/Interactions",
};

export default meta;
type Story = StoryObj;

export const UserSelect: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<p class="user-select-all p-3">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto p-3">This paragraph has default select behavior.</p>
<p class="user-select-text p-3">This paragraph can be select by user.</p>
<p class="user-select-none p-3">This paragraph will not be selectable when clicked by the user.</p>
`;
  },
};

export const PointerEvents: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<p class="p-3"><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p class="p-3"><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
<p class="pe-none p-3"><a href="#" tabindex="-1" aria-disabled="true">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
`;
  },
};

export const Cursor: Story = {
  args: {
    cursor: "pointer",
  },
  argTypes: {
    cursor: {
      control: "select",
      options: cursorOptions,
    },
  },
  render: (args) => {
    return `
<div class="cursor-${args.cursor} box p-3">Hover me with mouse to see my cursor type</div>
`;
  },
};
