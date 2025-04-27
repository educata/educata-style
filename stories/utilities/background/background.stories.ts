import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS } from "../../shared";

type BackgroundArgs = {
  variation: "main" | "primary" | "secondary" | "success" | "danger" | "white" | "black";
};

const meta: Meta<BackgroundArgs> = {
  title: "Utilities/Background",
};

export default meta;
type Story = StoryObj<BackgroundArgs>;

export const Examples: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex gap-3 flex-column">
    ${VARIATIONS.map(
      (variation) =>
        `<div class="bg-${variation} text-${variation}-bg rounded p-3">.bg-${variation}</div>`
    ).join("")}
</div>
`;
  },
};

export const Background: Story = {
  args: {
    variation: "main",
  },
  argTypes: {
    variation: {
      control: "select",
      options: VARIATIONS,
    },
  },
  render: (args) => {
    return `
<div class="d-flex justify-content-center align-items-center">
    <div class="bg-${args.variation} rounded p-3">
        .bg-${args.variation}
    </div>
</div>
`;
  },
};
