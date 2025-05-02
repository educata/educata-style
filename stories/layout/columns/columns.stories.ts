import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Layout/Columns",
};

export default meta;
type Story = StoryObj;

export const VerticalAligment: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center box p-3">
  <div class="row align-items-start style="min-height: 300px;"">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
`;
  },
};

export const VerticalAligment2: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center box p-3">
  <div class="row align-items-center" style="min-height: 300px;">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
`;
  },
};

export const VerticalAligment3: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center box p-3">
  <div class="row align-items-flex-end" style="min-height: 300px;">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
`;
  },
};

export const AlignSelf: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center box p-3">
  <div class="row" style="min-height: 300px;">
    <div class="col box p-3 align-self-flex-start">
      One of three columns
    </div>
    <div class="col box p-3 align-self-center">
      One of three columns
    </div>
    <div class="col box p-3 align-self-flex-end">
      One of three columns
    </div>
  </div>
</div>
`;
  },
};

export const Horizontal: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row justify-content-flex-start">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-flex-end">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-around">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-between">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-evenly">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
</div>
`;
  },
};

export const ColumnWrapping: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container p-3" data-box-width-remove>
  <div class="row">
    <div class="col-9 box p-3">.col-9</div>
    <div class="col-4 box p-3">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6 box p-3">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
`;
  },
};

export const ColumnBreaks: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3" data-box-width-remove>
  <div class="row">
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
  </div>
</div>
`;
  },
};
