import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Variables/Font",
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  tags: ["!dev"],
  render: () => {
    return `
<p class="lh-1 mb-3">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias animi qui molestiae
  omnis deserunt recusandae rerum, sequi velit quibusdam ipsum! Magnam ipsa fugiat optio
  dolor nihil minima suscipit hic blanditiis?
</p>

<p class="lh-sm mb-3">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias animi qui molestiae
  omnis deserunt recusandae rerum, sequi velit quibusdam ipsum! Magnam ipsa fugiat optio
  dolor nihil minima suscipit hic blanditiis?
</p>

<p class="lh-base mb-3">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias animi qui molestiae
  omnis deserunt recusandae rerum, sequi velit quibusdam ipsum! Magnam ipsa fugiat optio
  dolor nihil minima suscipit hic blanditiis?
</p>

<p class="lh-lg mb-3">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias animi qui molestiae
  omnis deserunt recusandae rerum, sequi velit quibusdam ipsum! Magnam ipsa fugiat optio
  dolor nihil minima suscipit hic blanditiis?
</p>
`;
  },
};
