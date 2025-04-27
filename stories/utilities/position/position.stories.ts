import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Position",
};

export default meta;
type Story = StoryObj;

export const Position: Story = {
  args: {
    position: "static",
  },
  argTypes: {
    position: {
      control: "select",
      options: ["static", "relative", "absolute", "fixed", "sticky"],
    },
  },
  render: (args) => {
    return `
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box-primary-active position-${args.position}" style="${
      args.position === "sticky" ? "top: 15px" : ""
    }">Position ${args.position}</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
`;
  },
};
