import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS } from "../../shared";

type ColorArgs = {
  variation: "main" | "primary" | "secondary" | "success" | "danger" | "white" | "black";
  background: boolean;
};

const meta: Meta<ColorArgs> = {
  title: "Utilities/Colors",
};

export default meta;
type Story = StoryObj<ColorArgs>;

export const Variations: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex flex-column gap-3">
  ${VARIATIONS.map(
    (variation) =>
      `<span class="text-${variation} p-2">.text-${variation}</span> <span class="text-${variation}-bg bg-${variation} p-2">.text-${variation}-bg</span>`
  ).join("")}
</div>
`;
  },
};

export const Colors: Story = {
  args: {
    variation: "main",
    background: false,
  },
  argTypes: {
    variation: {
      control: "select",
      options: VARIATIONS,
    },
  },
  render: (args) => {
    const classname = `text-${args.variation}${
      args.background ? `-bg bg-${args.variation}` : ""
    }`;
    return `
<div class="d-flex justify-content-center align-items-center">
    <span class="${classname} p-3">.text-${args.variation}${
      args.background ? "-bg" : ""
    }</span>
</div>
`;
  },
};
