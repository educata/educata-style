import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Flex",
};

export default meta;
type Story = StoryObj;

export const Display: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex box p-2">I'm a flexbox container!</div>
`;
  },
};

export const DisplayInline: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex box p-2">I'm a inline flexbox container!</div>
`;
  },
};

export const DirectionRow: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex flex-row mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
`;
  },
};

export const DirectionColumn: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex flex-column mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
`;
  },
};

export const JustifyContent: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex justify-content-flex-start mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex justify-content-flex-end mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex justify-content-center mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex justify-content-space-between mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex justify-content-space-around mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex justify-content-space-evenly mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
`;
  },
};

export const AlignItems: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex align-items-flex-start mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex align-items-flex-end mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex align-items-center mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex align-items-stretch mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex align-items-baseline mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
`;
  },
};

export const AlignSelf: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="align-self-flex-start p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="align-self-flex-end p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="align-self-center p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="align-self-stretch p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
<div class="d-flex mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="align-self-baseline p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
`;
  },
};

export const AlignContent: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex align-content-flex-start flex-wrap mb-3 box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
<div class="d-flex align-content-flex-end mb-3 flex-wrap box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
<div class="d-flex align-content-center mb-3 flex-wrap box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
<div class="d-flex align-content-stretch mb-3 flex-wrap box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
<div class="d-flex align-content-space-between mb-3 flex-wrap box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
<div class="d-flex align-content-space-around mb-3 flex-wrap box-wrapper" style="height: 100px;">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
`;
  },
};

export const Wrap: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex flex-wrap mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
<div class="d-flex mb-3 flex-nowrap box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
<div class="d-flex mb-3 flex-wrap-reverse box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
  <div class="p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
  <div class="p-2 box">Flex item 6</div>
  <div class="p-2 box">Flex item 7</div>
  <div class="p-2 box">Flex item 8</div>
  <div class="p-2 box">Flex item 9</div>
  <div class="p-2 box">Flex item 10</div>
</div>
`;
  },
};

export const Fill: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex mb-3 box-wrapper">
  <div class="flex-fill p-2 box">Flex with a lot of content</div>
  <div class="flex-fill p-2 box">Flex item 2</div>
  <div class="flex-fill p-2 box">Flex item 3</div>
</div>
`;
  },
};

export const Grow: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex mb-3 box-wrapper">
  <div class="flex-grow-1 p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="p-2 box">Flex item 3</div>
</div>
`;
  },
};

export const Shrink: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex mb-3 box-wrapper">
  <div class="p-2 box w-100">Flex item 1</div>
  <div class="flex-shrink-1 p-2 box">Flex item 2</div>
</div>
`;
  },
};

export const Order: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="d-flex mb-3 box-wrapper">
  <div class="p-2 box">Flex item 1</div>
  <div class="p-2 box">Flex item 2</div>
  <div class="order-2 p-2 box">Flex item 3</div>
  <div class="order-1 p-2 box">Flex item 4</div>
  <div class="p-2 box">Flex item 5</div>
</div>
`;
  },
};

export const Flex: Story = {
  args: {
    elementCount: 8,
    gapLevel: 3,
    wrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    direction: "row",
  },
  argTypes: {
    elementCount: {
      control: {
        type: "range",
        min: 1,
        max: 9,
      },
    },
    gapLevel: {
      control: {
        type: "range",
        min: 0,
        max: 5,
      },
    },
    justifyContent: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    alignContent: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between"],
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap", "wrap-reverse"],
    },
    alignItems: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    },
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
  },
  render: (args) => {
    const div = document.createElement("div");
    div.classList.add("d-flex", "m-auto", "box-wrapper", "p-3", "w-100", "vh-100");
    div.classList.add(`justify-content-${args.justifyContent}`);
    div.classList.add(`align-items-${args.alignItems}`);
    div.classList.add(`align-content-${args.alignContent}`);
    div.classList.add(`flex-${args.wrap}`);
    div.classList.add(`gap-${args.gapLevel}`);
    div.classList.add(`flex-${args.direction}`);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < args.elementCount; i++) {
      const element = document.createElement("div");
      element.classList.add("box", "p-3");
      element.innerText = `Element ${i + 1}`;
      fragment.appendChild(element);
    }

    div.appendChild(fragment);

    return div;
  },
};
