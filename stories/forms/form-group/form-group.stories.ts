import { Meta, StoryObj } from "@storybook/html";

interface FormControlOptional {
  labelText: string;
  placeholder: string;
  pattern: string;
}

type FormControlSupportedTypes =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "file";

interface FormControlArgs extends Partial<FormControlOptional> {
  type: FormControlSupportedTypes;
  readonly: boolean;
  disabled: boolean;
  required: boolean;
  addonText: string;
}

const meta: Meta<FormControlArgs> = {
  title: "Forms/Form Group",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<FormControlArgs>;

export const BasicExample: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<div class="mb-3">
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
  </div>
  <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
    `;
  },
};

export const Wrapping: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
`;
  },
};

export const Sizing: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>
`;
  },
};

export const CheckBoxRadio: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Input with checkbox">
</div>

<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button" placeholder="Input with radio button">
</div>
`;
  },
};

export const MultipleInputs: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control" placeholder="First name">
  <input type="text" aria-label="Last name" class="form-control" placeholder="Second name">
</div>
`;
  },
};

export const MultipleAddons: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>
`;
  },
};

export const Select: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Options</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>
`;
  },
};

export const Example: Story = {
  args: {
    type: "email",
    readonly: false,
    disabled: false,
    required: false,
    addonText: "@",
    placeholder: "Enter your email",
    pattern: "",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "file"],
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    const form = document.createElement("form");
    form.classList.add("w-100", "p-3", "border", "border-color-white", "rounded");
    const element = getFormGroup(args, "test", args.placeholder);
    form.appendChild(element);
    const button = document.createElement("button");
    button.classList.add("btn", "btn-secondary");
    button.setAttribute("type", "submit");
    button.innerText = "Submit";
    form.appendChild(button);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    return form;
  },
};

function getFormGroup(args: Partial<FormControlArgs>, name = "test", placeholder = "") {
  const uniquieId = Math.random().toString(36).substring(2, 15);
  const div = document.createElement("div");
  div.classList.add("input-group", "mb-3");
  const span = document.createElement("span");
  span.classList.add("input-group-text");
  span.setAttribute("id", `basic-addon-${uniquieId}`);
  span.innerText = args?.addonText || "@";
  div.appendChild(span);
  const input = document.createElement("input");
  input.classList.add("form-control");
  input.setAttribute("id", uniquieId);
  input.setAttribute("name", name);
  input.setAttribute("type", "text");
  if (args?.type) {
    input.setAttribute("type", args.type);
  }
  if (args?.readonly) {
    input.setAttribute("readonly", "readonly");
  }
  if (args?.disabled) {
    input.setAttribute("disabled", "disabled");
  }
  if (args?.required) {
    input.setAttribute("required", "required");
  }
  if (args?.pattern) {
    input.setAttribute("pattern", args.pattern);
  }
  if (placeholder) {
    input.setAttribute("placeholder", placeholder);
  }
  div.appendChild(input);
  return div;
}
