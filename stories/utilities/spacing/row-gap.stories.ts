import { Meta, StoryObj } from "@storybook/html";

type RowGapArgs = {
  gapLevel: number;
  elementCount: number;
  maxWidth: string;
};

const meta: Meta<RowGapArgs> = {
  title: "Utilities/Spacing/RowGap",
};

export default meta;
type Story = StoryObj<RowGapArgs>;

export const RowGap: Story = {
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
    div.classList.add("d-flex", "flex-wrap-wrap", "m-auto");
    div.style.maxWidth = args.maxWidth;
    div.classList.add(`row-gap-${args.gapLevel}`);
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
