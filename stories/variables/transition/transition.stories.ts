import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Variables/Transition",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<style>
  #transition-example div:nth-child(1) {
    transition: var(--ec-transition-linear);
  }
  #transition-example div:nth-child(2) {
    transition: var(--ec-transition-ease);
  }
  #transition-example div:nth-child(3) {
    transition: var(--ec-transition-ease-in);
  }
  #transition-example div:nth-child(4) {
    transition: var(--ec-transition-ease-out);
  }
  #transition-example div:nth-child(5) {
    transition: var(--ec-transition-ease-in-out);
  }
  #transition-example div:hover {
    background-color: var(--ec-secondary-bg-color);
  }
</style>
<div class="d-flex flex-wrap gap-3 justify-content-center align-items-center" id="transition-example">
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
</div>
`;
  },
};
