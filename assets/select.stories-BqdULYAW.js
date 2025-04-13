const A={title:"Forms/Select",parameters:{backgrounds:{default:"dark"}}},o={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
`},t={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
`},n={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
`},a={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<select class="form-select" multiple aria-label="Multiple select example">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
</select>
`},l={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<select class="form-select" size="3" aria-label="Size 3 select example">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
</select>
`},s={args:{disabled:!1,items:["One","Two","Three","Four","Five","Six","Seven"]},parameters:{backgrounds:{default:"dark"}},render:r=>{const e=document.createElement("select");e.classList.add("form-select"),e.setAttribute("aria-label","Default select example"),r.disabled&&e.setAttribute("disabled","true");const i=document.createDocumentFragment();return r.items.forEach(z=>{const p=document.createElement("option");p.innerText=z,i.appendChild(p)}),e.appendChild(i),e}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
\`;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,v,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
\`;
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,g,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
\`;
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var T,h,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<select class="form-select" multiple aria-label="Multiple select example">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
</select>
\`;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var O,k,F;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<select class="form-select" size="3" aria-label="Size 3 select example">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
</select>
\`;
  }
}`,...(F=(k=l.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var w,D,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: false,
    items: ["One", "Two", "Three", "Four", "Five", "Six", "Seven"]
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
    const select = document.createElement("select");
    select.classList.add("form-select");
    select.setAttribute("aria-label", "Default select example");
    if (args.disabled) {
      select.setAttribute("disabled", "true");
    }
    const fragment = document.createDocumentFragment();
    args.items.forEach(item => {
      const option = document.createElement("option");
      option.innerText = item;
      fragment.appendChild(option);
    });
    select.appendChild(fragment);
    return select;
  }
}`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const C=["FormSelectDefault","FormSelectSizing","FormSelectDisabled","FormSelectMultiple","FormSelectSize","Example"];export{s as Example,o as FormSelectDefault,n as FormSelectDisabled,a as FormSelectMultiple,l as FormSelectSize,t as FormSelectSizing,C as __namedExportsOrder,A as default};
