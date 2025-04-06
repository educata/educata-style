import { Meta, StoryObj } from "@storybook/html";

type CheckboxArgs = {
  checked: boolean;
  disabled: boolean;
  required: boolean;
};

const meta: Meta<CheckboxArgs> = {
  title: "Forms/Checkbox & Radio",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const DefaultCheckboxs: Story = {
  args: {
    checked: false,
    disabled: false,
    required: false,
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    const form = document.createElement("form");
    const div = getCheckBox({}, "Default checkbox");
    const div2 = getCheckBox({ checked: true }, "Checked checkbox");
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  },
};

export const DefaultDisabledCheckboxs: Story = {
  args: {
    checked: false,
    disabled: false,
    required: false,
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    const form = document.createElement("form");
    const div = getCheckBox({ disabled: true }, "Disabled checkbox");
    const div2 = getCheckBox(
      { checked: true, disabled: true },
      "Diasbled checked checkbox"
    );
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  },
};

export const DefaultSwitchCheckbox: Story = {
  args: {
    checked: false,
    disabled: false,
    required: false,
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    const form = document.createElement("form");
    const div = getCheckBox({}, "Default switch checkbox", true);
    const div2 = getCheckBox({ checked: true }, "Default checked switch checkbox", true);
    const div3 = getCheckBox({ disabled: true }, "Disabled switch checkbox", true);
    const div4 = getCheckBox(
      { disabled: true, checked: true },
      "Disabled switch checkbox",
      true
    );
    form.appendChild(div);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    const actions = document.createElement("div");
    actions.classList.add("d-flex", "gap-2", "mt-3");
    return form;
  },
};

export const DefaultRadios: Story = {
  args: {
    checked: false,
    disabled: false,
    required: false,
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    const form = document.createElement("form");
    const div = getRadio({}, "Default radio", "test1");
    const div2 = getRadio({ checked: true }, "Default checked radio", "test1");
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  },
};

export const DefaultDisabledRadios: Story = {
  args: {
    checked: false,
    disabled: false,
    required: false,
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    const form = document.createElement("form");
    const div = getRadio({ disabled: true }, "Disabled radio", "test2");
    const div2 = getRadio(
      { checked: true, disabled: true },
      "Disabled checked radio",
      "test2"
    );
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  },
};

export const Checkbox: Story = {
  args: {
    checked: false,
    disabled: false,
    required: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    const form = document.createElement("form");
    const div = getCheckBox(args, "Checkbox");
    form.appendChild(div);
    const actions = document.createElement("div");
    actions.classList.add("d-flex", "gap-2", "mt-3");
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.classList.add("btn", "btn-success");
    submit.innerText = "Submit";
    const reset = document.createElement("button");
    reset.type = "reset";
    reset.classList.add("btn", "btn-secondary");
    reset.innerText = "Reset";
    actions.appendChild(submit);
    actions.appendChild(reset);
    form.appendChild(actions);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    return form;
  },
};

export const Radio: Story = {
  args: {
    checked: false,
    disabled: false,
    required: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    const form = document.createElement("form");
    const div = getRadio(args, "Element 1");
    const div2 = getRadio(args, "Element 2");
    form.appendChild(div);
    form.appendChild(div2);
    const actions = document.createElement("div");
    actions.classList.add("d-flex", "gap-2", "mt-3");
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.classList.add("btn", "btn-success");
    submit.innerText = "Submit";
    const reset = document.createElement("button");
    reset.type = "reset";
    reset.classList.add("btn", "btn-secondary");
    reset.innerText = "Reset";
    actions.appendChild(submit);
    actions.appendChild(reset);
    form.appendChild(actions);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    return form;
  },
};

export const Switch: Story = {
  args: {
    checked: false,
    disabled: false,
    required: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: (args) => {
    const form = document.createElement("form");
    const div = getCheckBox(args, "Switch", true);
    form.appendChild(div);
    const actions = document.createElement("div");
    actions.classList.add("d-flex", "gap-2", "mt-3");
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.classList.add("btn", "btn-success");
    submit.innerText = "Submit";
    const reset = document.createElement("button");
    reset.type = "reset";
    reset.classList.add("btn", "btn-secondary");
    reset.innerText = "Reset";
    actions.appendChild(submit);
    actions.appendChild(reset);
    form.appendChild(actions);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    return form;
  },
};

function getCheckBox(
  args: Partial<CheckboxArgs>,
  labelText = "Checkbox label",
  switchType = false
): HTMLDivElement {
  const uniquieId = Math.random().toString(36).substring(2, 15);
  const div = document.createElement("div");
  div.classList.add("form-check");
  div.innerHTML = `
    <input
      type="checkbox"
      class="form-check-input"
      id="checkbox-${uniquieId}"
      ${args?.checked ? "checked" : ""}
      ${args?.disabled ? "disabled" : ""}
      ${args?.required ? "required" : ""}
      ${switchType ? "role='switch'" : ""}
    />
    <label class="form-check-label" for="checkbox-${uniquieId}">${labelText}</label>
  `;
  return div;
}

function getRadio(
  args: Partial<CheckboxArgs>,
  labelText = "Radio label",
  name = "test"
): HTMLDivElement {
  const uniquieId = Math.random().toString(36).substring(2, 15);
  const div = document.createElement("div");
  div.classList.add("form-check");
  div.innerHTML = `
    <input
      type="radio"
      class="form-check-input"
      name="${name}"
      id="checkbox-${uniquieId}"
      ${args?.checked ? "checked" : ""}
      ${args?.disabled ? "disabled" : ""}
      ${args?.required ? "required" : ""}
    />
    <label class="form-check-label" for="checkbox-${uniquieId}">${labelText}</label>
  `;
  return div;
}
