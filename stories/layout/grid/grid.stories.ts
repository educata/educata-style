import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Layout/Grid",
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
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      Column
    </div>
    <div class="col box p-3">
      Column
    </div>
    <div class="col box p-3">
      Column
    </div>
  </div>
</div>
`;
  },
};

export const EqualWidth: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      1 of 2
    </div>
    <div class="col box p-3">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col box p-3">
      2 of 3
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
</div>
`;
  },
};

export const OneColumnWidth: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col-6 box p-3">
      2 of 3 (wider)
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col-5 box p-3">
      2 of 3 (wider)
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
</div>
`;
  },
};

export const VariableWidth: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2 p-3 box">
      1 of 3
    </div>
    <div class="col-md-auto p-3 box">
      Variable width content
    </div>
    <div class="col col-lg-2 p-3 box">
      3 of 3
    </div>
  </div>
</div>
`;
  },
};

export const AllBreakpoints: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
  </div>
  <div class="row">
    <div class="col-8 box p-3">col-8</div>
    <div class="col-4 box p-3">col-4</div>
  </div>
</div>
`;
  },
};

export const StackedHorizontal: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row">
    <div class="col-sm-8 box p-3">col-sm-8</div>
    <div class="col-sm-4 box p-3">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm box p-3">col-sm</div>
    <div class="col-sm box p-3">col-sm</div>
    <div class="col-sm box p-3">col-sm</div>
  </div>
</div>
`;
  },
};

export const MixAndMatch: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8 box p-3">.col-md-8</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6 box p-3">.col-6</div>
    <div class="col-6 box p-3">.col-6</div>
  </div>
</div>
`;
  },
};

export const RowColumns1: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row row-cols-2">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`;
  },
};

export const RowColumns2: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row row-cols-3">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`;
  },
};

export const RowColumns3: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row row-cols-auto">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`;
  },
};

export const RowColumns4: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row row-cols-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`;
  },
};

export const RowColumns5: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row row-cols-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col-6 box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`;
  },
};

export const RowColumns6: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`;
  },
};

export const Nesting: Story = {
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    return `
<div class="container text-center p-3 box">
  <div class="row">
    <div class="col-sm-3 box p-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6 box p-3">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6 box p-3">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
`;
  },
};
