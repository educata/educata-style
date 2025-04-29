import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Breadcrumb",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
`;
  },
};

export const Dividers: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb" style="--ec-breadcrumb-divider: '>';">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
`;
  },
};

export const Breadcrumb: Story = {
  args: {
    count: 3,
  },
  argTypes: {
    count: {
      control: {
        type: "range",
        min: 1,
        max: 9,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    return `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    ${new Array(args.count)
      .fill(0)
      .map((_, i) => {
        return `<li class="breadcrumb-item"><a href="#">Item ${i + 1}</a></li>`;
      })
      .join("")}
  </ol>
</nav>
`;
  },
};
