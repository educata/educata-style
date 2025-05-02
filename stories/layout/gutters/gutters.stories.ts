import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Layout/Gutters",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container px-4 text-center p-3">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 box">Custom column padding</div>
    </div>
  </div>
</div>
`;
  },
};

export const OverflowHidden: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container overflow-hidden text-center p-3">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 box">Custom column padding</div>
    </div>
  </div>
</div>
`;
  },
};

export const Vertical: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container overflow-hidden text-center p-3">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
  </div>
</div>
`;
  },
};

export const HorizontalAndVertical: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 box">Custom column padding</div>
    </div>
  </div>
</div>
`;
  },
};

export const RowColumns: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 box">Row column</div>
    </div>
  </div>
</div>
`;
  },
};

export const NoGutters: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="row g-0 text-center p-3">
  <div class="col-sm-6 col-md-8 box p-3">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
</div>
`;
  },
};
