import { Meta, StoryObj } from "@storybook/html";

type DisplayArgs = {
  display:
    | "block"
    | "inline"
    | "inline-block"
    | "none"
    | "flex"
    | "inline-flex"
    | "grid"
    | "inline-grid"
    | "table"
    | "table-row"
    | "table-cell";
};

const meta: Meta<DisplayArgs> = {
  title: "Utilities/Display",
};

export default meta;
type Story = StoryObj<DisplayArgs>;

export const Inline: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-inline p-2 bg-primary">d-inline</div>
<div class="d-inline p-2 bg-secondary">d-inline</div>
`;
  },
};

export const Block: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-block p-2 bg-success">d-block</div>
<div class="d-block p-2 bg-danger">d-block</div>
`;
  },
};

export const Display: Story = {
  args: {
    display: "block",
  },
  argTypes: {
    display: {
      control: "select",
      options: [
        "block",
        "inline",
        "inline-block",
        "none",
        "flex",
        "inline-flex",
        "grid",
        "inline-grid",
        "table",
        "table-row",
        "table-cell",
      ],
    },
  },
  render: (args) => {
    return `
<div class="d-${args.display} p-2 bg-primary">d-${args.display}</div>
`;
  },
};
