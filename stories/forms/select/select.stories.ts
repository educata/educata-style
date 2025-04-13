import { Meta, StoryObj } from "@storybook/html";

type FormSelectArgs = {
  disabled: boolean;
  items: string[];
};

const meta: Meta<FormSelectArgs> = {
  title: "Forms/Select",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<FormSelectArgs>;

export const FormSelectDefault: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
`;
  },
};

export const FormSelectSizing: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<select class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select mb-3" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label="Small select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
`;
  },
};

export const FormSelectDisabled: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
`;
  },
};

export const FormSelectMultiple: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<select class="form-select" multiple aria-label="Multiple select example">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
</select>
`;
  },
};

export const FormSelectSize: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<select class="form-select" size="3" aria-label="Size 3 select example">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
</select>
`;
  },
};

export const Example: Story = {
  args: {
    disabled: false,
    items: ["One", "Two", "Three", "Four", "Five", "Six", "Seven"],
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    const select = document.createElement("select");
    select.classList.add("form-select");
    select.setAttribute("aria-label", "Default select example");
    if (args.disabled) {
      select.setAttribute("disabled", "true");
    }
    const fragment = document.createDocumentFragment();
    args.items.forEach((item) => {
      const option = document.createElement("option");
      option.innerText = item;
      fragment.appendChild(option);
    });
    select.appendChild(fragment);
    return select;
  },
};
