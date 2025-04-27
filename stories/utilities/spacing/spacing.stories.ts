import { Meta, StoryObj } from "@storybook/html";

type GapArgs = {
  gapLevel: number;
  elementCount: number;
  maxWidth: string;
};

const meta: Meta<GapArgs> = {
  title: "Utilities/Spacing",
};

export default meta;
type Story = StoryObj<GapArgs>;

export const Gap: Story = {
  args: {
    elementCount: 8,
    gapLevel: 3,
    maxWidth: "500px",
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
  },
  render: (args) => {
    const div = document.createElement("div");
    div.classList.add("d-flex", "flex-wrap", "m-auto");
    div.style.maxWidth = args.maxWidth;
    div.classList.add(`gap-${args.gapLevel}`);
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

export const RowGap: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="d-flex flex-wrap row-gap-3 m-atuo" style="max-width: 500px;">
  <div class="box p-3">Element 1</div>
  <div class="box p-3">Element 2</div>
  <div class="box p-3">Element 3</div>
  <div class="box p-3">Element 4</div>
  <div class="box p-3">Element 5</div>
  <div class="box p-3">Element 6</div>
  <div class="box p-3">Element 7</div>
  <div class="box p-3">Element 8</div>
</div>
`;
  },
};

export const ColGap: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="d-flex flex-wrap column-gap-3 m-auto" style="max-width: 500px;">
  <div class="box p-3">Element 1</div>
  <div class="box p-3">Element 2</div>
  <div class="box p-3">Element 3</div>
  <div class="box p-3">Element 4</div>
  <div class="box p-3">Element 5</div>
  <div class="box p-3">Element 6</div>
  <div class="box p-3">Element 7</div>
  <div class="box p-3">Element 8</div>
</div>
`;
  },
};

export const CenteredDiv: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="m-auto">
  <div class="box p-3">Element</div>
</div>
`;
  },
};
