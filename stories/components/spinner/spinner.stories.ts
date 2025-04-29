import { Meta, StoryObj } from "@storybook/html";
import { VARIATIONS } from "../../shared";

const meta: Meta = {
  title: "Components/Spinner",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex flex-column gap-3">
  <div class="spinner"></div>
  <div class="spinner spinner-primary"></div>
  <div class="spinner spinner-secondary"></div>
  <div class="spinner spinner-success"></div>
  <div class="spinner spinner-danger"></div>
  <div class="spinner spinner-white"></div>
  <div class="bg-white d-flex flex-column gap-3 p-3">
    <div class="spinner spinner-black"></div>
    <div class="spinner spinner-main"></div>
  </div>
</div>
`;
  },
};

export const Size: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex flex-column gap-3">
  <div class="spinner spinner-sm"></div>
  <div class="spinner"></div>
  <div class="spinner spinner-lg"></div>
</div>
`;
  },
};

export const Reverse: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<div class="d-flex flex-column gap-3">
  <div class="spinner"></div>
  <div class="spinner spinner-reverse"></div>
</div>
`;
  },
};

export const Spinner: Story = {
  args: {
    spinner: "primary",
    size: "default",
    reverse: false,
  },
  argTypes: {
    spinner: {
      control: "select",
      options: VARIATIONS,
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    return `
<div class="spinner spinner-${args.spinner} spinner-${args.size} ${
      args.reverse ? "spinner-reverse" : ""
    }"></div>
`;
  },
};
