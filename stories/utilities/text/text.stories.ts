import { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Utilities/Text",
};

export default meta;
type Story = StoryObj;

export const Align: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="text-start p-3">Start aligned text</p>
<p class="text-center p-3">Center aligned text</p>
<p class="text-end p-3">End aligned text</p>
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
<div class="bg-primary text-wrap-normal text-center p-1 rounded" style="width: 6rem;">
  This text should wrap.
</div>
`;
  },
};

export const NoWrap: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<div class="bg-primary text-wrap-nowrap text-center p-1 rounded" style="width: 6rem;">
  This text should overflow the parent.
</div>
`;
  },
};

export const Break: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="text-break-all p-3">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
`;
  },
};

export const KeepAll: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="text-keep-all p-3">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
`;
  },
};

export const Transform: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="text-lowercase p-3">Lowercased text.</p>
<p class="text-uppercase p-3">Uppercased text.</p>
<p class="text-capitalize p-3">CapiTaliZed text.</p>
`;
  },
};

export const FontSize: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="fs-1 p-3">.fs-1 text</p>
<p class="fs-2 p-3">.fs-2 text</p>
<p class="fs-3 p-3">.fs-3 text</p>
<p class="fs-4 p-3">.fs-4 text</p>
<p class="fs-5 p-3">.fs-5 text</p>
<p class="fs-6 p-3">.fs-6 text</p>
`;
  },
};

export const FontWeight: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="fw-9 fs-3 p-3">.fw-9</p>
<p class="fw-8 fs-3 p-3">.fw-8</p>
<p class="fw-7 fs-3 p-3">.fw-7</p>
<p class="fw-6 fs-3 p-3">.fw-6</p>
<p class="fw-5 fs-3 p-3">.fw-5</p>
<p class="fw-4 fs-3 p-3">.fw-4</p>
<p class="fw-3 fs-3 p-3">.fw-3</p>
<p class="fw-2 fs-3 p-3">.fw-2</p>
<p class="fw-1 fs-3 p-3">.fw-1</p>
`;
  },
};

export const FontStyle: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="fs-normal fs-3 p-3">.fs-normal</p>
<p class="fs-italic fs-3 p-3">.fs-italic</p>
<p class="fs-oblique fs-3 p-3">.fs-oblique</p>
`;
  },
};

export const LineHeight: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="lh-1 p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-sm p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-base p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-lg p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
`;
  },
};

export const TextDecoration: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="text-decoration-underline p-3">This text has a line underneath it.</p>
<p class="text-decoration-overline p-3">This text has a line over it.</p>
<a href="#" class="text-decoration-none p-3">This link has its text decoration removed</a>
<p class="text-decoration-line-through p-3">This text has a line going through it.</p>
`;
  },
};

export const ResetColor: Story = {
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  render: () => {
    return `
<p class="text-secondary p-3">
  Secondary text with a <a href="#" class="text-reset">reset link</a>.
</p>
<p class="text-secondary p-3">
  Secondary text without a <a href="#">reset link</a>.
</p>
`;
  },
};

export const Text: Story = {
  args: {
    align: "start",
    wrap: "normal",
    break: "break-all",
    size: "3",
    weight: "3",
    style: "none",
    lineHeight: "base",
    decoration: "none",
    transform: "lowercase",
  },
  parameters: {
    layout: {
      type: "fullscreen",
    },
  },
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["start", "center", "end"],
      description: "Text alignment",
    },
    wrap: {
      control: { type: "select" },
      options: ["normal", "nowrap", "wrap"],
      description: "Text wrapping behavior",
    },
    break: {
      control: { type: "select" },
      options: ["break-all", "keep-all"],
      description: "Text breaking behavior",
    },
    size: {
      control: { type: "select" },
      options: ["1", "2", "3", "4", "5", "6"],
      description: "Font size",
    },
    weight: {
      control: { type: "select" },
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description: "Font weight",
    },
    style: {
      control: { type: "select" },
      options: ["none", "normal", "italic", "oblique"],
      description: "Font style",
    },
    lineHeight: {
      control: { type: "select" },
      options: ["1", "sm", "base", "lg"],
      description: "Line height",
    },
    decoration: {
      control: { type: "select" },
      options: ["none", "underline", "overline", "line-through"],
      description: "Text decoration",
    },
    transform: {
      control: { type: "select" },
      options: ["lowercase", "uppercase", "capitalize"],
      description: "Text transformation",
    },
  },
  render: (args) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add(
      "vh-100",
      "vw-100",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    const text = document.createElement("p");
    text.style.maxWidth = "800px";
    text.classList.add(
      `text-${args.align}`,
      `text-wrap-${args.wrap}`,
      `text-${args.break}`,
      `fs-${args.size}`,
      `fw-${args.weight}`,
      `fs-${args.style}`,
      `lh-${args.lineHeight}`,
      `text-decoration-${args.decoration}`,
      `text-${args.transform}`
    );
    text.innerText = `This is a ${args.transform} text with a ${args.decoration} decoration, ${args.lineHeight} line height, ${args.weight} weight, ${args.size} size, ${args.break} break, ${args.wrap} wrap, and ${args.align} alignment.`;
    wrapper.appendChild(text);
    return wrapper;
  },
};
