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
}

const meta: Meta<FormControlArgs> = {
  title: "Forms/Form Control",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<FormControlArgs>;

export const DefaultForm: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
`;
  },
};

export const FormControlSizing: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<input class="form-control form-control-sm mb-3" type="text" placeholder="Small input" />
<input class="form-control mb-3" type="text" placeholder="Default input" />
<input class="form-control form-control-lg mb-3" type="text" placeholder="Large input" />
    `;
  },
};

export const FormText: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" placeholder="Some strong password" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
    `;
  },
};

export const FormControlDisabled: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="mb-3">
  <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
</div>
<div class="mb-3">
  <label for="disabledTextInput" class="form-label">Disabled input with label</label>
  <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" disabled>
</div>
`;
  },
};

export const FormControlReadonly: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="mb-3">
  <input class="form-control" type="text" placeholder="Readonly input" aria-label="Readonly input example" readonly>
</div>
<div class="mb-3">
  <label for="readonlyTextInput" class="form-label">Readonly input with label</label>
  <input type="text" id="readonlyTextInput" class="form-control" placeholder="Readonly input" readonly>
</div>
`;
  },
};

export const FormControlPlainText: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-4 form-label">Email</label>
    <div class="col-sm-8">
      <input type="text" readonly class="form-control form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 form-label">Password</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
`;
  },
};

export const FormControlFileInput: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Disabled file input example</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>
<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
`;
  },
};

export const FormControlColorInput: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<input class="form-control" type="color" id="colorInput">
`;
  },
};

export const FormControlDataList: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
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
  args: Partial<FormControlArgs>,
  name = "test",
  labelText = "Label",
  placeholder = ""
) {
  const uniquieId = Math.random().toString(36).substring(2, 15);
  const div = document.createElement("div");
  div.classList.add("mb-3");
  const label = document.createElement("label");
  label.classList.add("form-label");
  label.setAttribute("for", uniquieId);
  label.innerText = labelText;
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
  div.appendChild(label);
  div.appendChild(input);
  return div;
}
