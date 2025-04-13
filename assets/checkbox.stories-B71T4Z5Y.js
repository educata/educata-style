const G={title:"Forms/Checkbox & Radio",parameters:{backgrounds:{default:"dark"}}},i={args:{checked:!1,disabled:!1,required:!1},tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>{const e=document.createElement("form"),t=r({},"Default checkbox"),d=r({checked:!0},"Checked checkbox");return e.appendChild(t),e.appendChild(d),e}},l={args:{checked:!1,disabled:!1,required:!1},tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>{const e=document.createElement("form"),t=r({disabled:!0},"Disabled checkbox"),d=r({checked:!0,disabled:!0},"Diasbled checked checkbox");return e.appendChild(t),e.appendChild(d),e}},u={args:{checked:!1,disabled:!1,required:!1},tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>{const e=document.createElement("form"),t=r({},"Default switch checkbox",!0),d=r({checked:!0},"Default checked switch checkbox",!0),s=r({disabled:!0},"Disabled switch checkbox",!0),n=r({disabled:!0,checked:!0},"Disabled switch checkbox",!0);return e.appendChild(t),e.appendChild(d),e.appendChild(s),e.appendChild(n),document.createElement("div").classList.add("d-flex","gap-2","mt-3"),e}},m={args:{checked:!1,disabled:!1,required:!1},tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>{const e=document.createElement("form"),t=o({},"Default radio","test1"),d=o({checked:!0},"Default checked radio","test1");return e.appendChild(t),e.appendChild(d),e}},p={args:{checked:!1,disabled:!1,required:!1},tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>{const e=document.createElement("form"),t=o({disabled:!0},"Disabled radio","test2"),d=o({checked:!0,disabled:!0},"Disabled checked radio","test2");return e.appendChild(t),e.appendChild(d),e}},b={args:{checked:!1,disabled:!1,required:!0},parameters:{backgrounds:{default:"dark"}},render:e=>{const t=document.createElement("form"),d=r(e,"Checkbox");t.appendChild(d);const s=document.createElement("div");s.classList.add("d-flex","gap-2","mt-3");const n=document.createElement("button");n.type="submit",n.classList.add("btn","btn-success"),n.innerText="Submit";const a=document.createElement("button");return a.type="reset",a.classList.add("btn","btn-secondary"),a.innerText="Reset",s.appendChild(n),s.appendChild(a),t.appendChild(s),t.addEventListener("submit",c=>{c.preventDefault()}),t}},f={args:{checked:!1,disabled:!1,required:!0},parameters:{backgrounds:{default:"dark"}},render:e=>{const t=document.createElement("form"),d=o(e,"Element 1"),s=o(e,"Element 2");t.appendChild(d),t.appendChild(s);const n=document.createElement("div");n.classList.add("d-flex","gap-2","mt-3");const a=document.createElement("button");a.type="submit",a.classList.add("btn","btn-success"),a.innerText="Submit";const c=document.createElement("button");return c.type="reset",c.classList.add("btn","btn-secondary"),c.innerText="Reset",n.appendChild(a),n.appendChild(c),t.appendChild(n),t.addEventListener("submit",A=>{A.preventDefault()}),t}},h={args:{checked:!1,disabled:!1,required:!0},parameters:{backgrounds:{default:"dark"}},render:e=>{const t=document.createElement("form"),d=r(e,"Switch",!0);t.appendChild(d);const s=document.createElement("div");s.classList.add("d-flex","gap-2","mt-3");const n=document.createElement("button");n.type="submit",n.classList.add("btn","btn-success"),n.innerText="Submit";const a=document.createElement("button");return a.type="reset",a.classList.add("btn","btn-secondary"),a.innerText="Reset",s.appendChild(n),s.appendChild(a),t.appendChild(s),t.addEventListener("submit",c=>{c.preventDefault()}),t}};function r(e,t="Checkbox label",d=!1){const s=Math.random().toString(36).substring(2,15),n=document.createElement("div");return n.classList.add("form-check"),n.innerHTML=`
    <input
      type="checkbox"
      class="form-check-input"
      id="checkbox-${s}"
      ${e!=null&&e.checked?"checked":""}
      ${e!=null&&e.disabled?"disabled":""}
      ${e!=null&&e.required?"required":""}
      ${d?"role='switch'":""}
    />
    <label class="form-check-label" for="checkbox-${s}">${t}</label>
  `,n}function o(e,t="Radio label",d="test"){const s=Math.random().toString(36).substring(2,15),n=document.createElement("div");return n.classList.add("form-check"),n.innerHTML=`
    <input
      type="radio"
      class="form-check-input"
      name="${d}"
      id="checkbox-${s}"
      ${e!=null&&e.checked?"checked":""}
      ${e!=null&&e.disabled?"disabled":""}
      ${e!=null&&e.required?"required":""}
    />
    <label class="form-check-label" for="checkbox-${s}">${t}</label>
  `,n}var k,v,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: false
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    const form = document.createElement("form");
    const div = getCheckBox({}, "Default checkbox");
    const div2 = getCheckBox({
      checked: true
    }, "Checked checkbox");
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var x,g,E;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: false
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    const form = document.createElement("form");
    const div = getCheckBox({
      disabled: true
    }, "Disabled checkbox");
    const div2 = getCheckBox({
      checked: true,
      disabled: true
    }, "Diasbled checked checkbox");
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  }
}`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var D,L,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: false
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    const form = document.createElement("form");
    const div = getCheckBox({}, "Default switch checkbox", true);
    const div2 = getCheckBox({
      checked: true
    }, "Default checked switch checkbox", true);
    const div3 = getCheckBox({
      disabled: true
    }, "Disabled switch checkbox", true);
    const div4 = getCheckBox({
      disabled: true,
      checked: true
    }, "Disabled switch checkbox", true);
    form.appendChild(div);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    const actions = document.createElement("div");
    actions.classList.add("d-flex", "gap-2", "mt-3");
    return form;
  }
}`,...(q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var S,R,y;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: false
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    const form = document.createElement("form");
    const div = getRadio({}, "Default radio", "test1");
    const div2 = getRadio({
      checked: true
    }, "Default checked radio", "test1");
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  }
}`,...(y=(R=m.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var w,T,$;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: false
  },
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    const form = document.createElement("form");
    const div = getRadio({
      disabled: true
    }, "Disabled radio", "test2");
    const div2 = getRadio({
      checked: true,
      disabled: true
    }, "Disabled checked radio", "test2");
    form.appendChild(div);
    form.appendChild(div2);
    return form;
  }
}`,...($=(T=p.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var B,M,H;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: true
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
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
    form.addEventListener("submit", e => {
      e.preventDefault();
    });
    return form;
  }
}`,...(H=(M=b.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var I,_,F;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: true
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
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
    form.addEventListener("submit", e => {
      e.preventDefault();
    });
    return form;
  }
}`,...(F=(_=f.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,j,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    required: true
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
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
    form.addEventListener("submit", e => {
      e.preventDefault();
    });
    return form;
  }
}`,...(z=(j=h.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const J=["DefaultCheckboxs","DefaultDisabledCheckboxs","DefaultSwitchCheckbox","DefaultRadios","DefaultDisabledRadios","Checkbox","Radio","Switch"];export{b as Checkbox,i as DefaultCheckboxs,l as DefaultDisabledCheckboxs,p as DefaultDisabledRadios,m as DefaultRadios,u as DefaultSwitchCheckbox,f as Radio,h as Switch,J as __namedExportsOrder,G as default};
