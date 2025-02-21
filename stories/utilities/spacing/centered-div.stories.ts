import { Meta, StoryObj } from "@storybook/html";

type DivArgs = {
  width: string;
  center: boolean;
};

const meta: Meta<DivArgs> = {
  title: "Utilities/Spacing/Centered Div",
};

export default meta;
type Story = StoryObj<DivArgs>;

export const CenteredDiv: Story = {
  args: {
    width: "125px",
    center: true,
  },
  render: (args) => {
    const div = document.createElement("div");
    div.classList.add("box", "p-3", "text-center");
    div.innerText = "Centered Div";
    div.style.width = args.width;

    if (args.center) {
      div.classList.toggle("m-auto");
    }

    return div;
  },
};
