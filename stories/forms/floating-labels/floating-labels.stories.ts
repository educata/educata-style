import { Meta, StoryObj } from "@storybook/html";

interface FormFloatingOptional {
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

interface FormFloating extends Partial<FormFloatingOptional> {
  type: FormControlSupportedTypes;
  readonly: boolean;
  disabled: boolean;
  required: boolean;
}

const meta: Meta<FormFloating> = {
  title: "Forms/Floating labels",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<FormFloating>;

export const DefaultExample: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
`;
  },
};

export const DefinedValue: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<form class="form-floating">
  <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
  <label for="floatingInputValue">Input with value</label>
</form>
`;
  },
};

export const Textarea: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
`;
  },
};

export const TextareaWithValue: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
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
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>
`;
  },
};

export const Disabled: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled>
  <label for="floatingInputDisabled">Email address</label>
</div>
<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></textarea>
  <label for="floatingTextareaDisabled">Comments</label>
</div>
<div class="form-floating">
  <select class="form-select" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelectDisabled">Works with selects</label>
</div>
`;
  },
};

export const InputGroups: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
    <label for="floatingInputGroup1">Username</label>
  </div>
</div>
`;
  },
};

export const Layout: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="row g-2 align-items-flex-end">
  <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
      <label for="floatingInputGrid">Email address</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label for="floatingSelectGrid">Works with selects</label>
    </div>
  </div>
</div>
`;
  },
};

export const Example: Story = {
  args: {
    type: "text",
    readonly: false,
    disabled: false,
    required: false,
    labelText: "Username",
    placeholder: "Enter your name",
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
    const element = getFormControl(args, "test", args.labelText, args.placeholder);
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

function getFormControl(
  args: Partial<FormFloating>,
  name = "test",
  labelText = "Label",
  placeholder = ""
) {
  const uniquieId = Math.random().toString(36).substring(2, 15);
  const div = document.createElement("div");
  div.classList.add("form-floating", "mb-3");
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
  const label = document.createElement("label");
  label.classList.add("form-label");
  label.setAttribute("for", uniquieId);
  label.innerText = labelText;
  div.appendChild(label);
  return div;
}
