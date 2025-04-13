const M={title:"Forms/Input Group",parameters:{backgrounds:{default:"dark"}}},i={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
    `},p={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
`},l={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
`},u={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
`},d={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control" placeholder="First name">
  <input type="text" aria-label="Last name" class="form-control" placeholder="Second name">
</div>
`},c={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
`},m={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
`},b={args:{type:"email",readonly:!1,disabled:!1,required:!1,addonText:"@",placeholder:"Enter your email",pattern:""},argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","file"]}},parameters:{backgrounds:{default:"dark"}},render:e=>{const n=document.createElement("form");n.classList.add("w-100","p-3","border","border-color-white","rounded");const s=W(e,"test",e.placeholder);n.appendChild(s);const a=document.createElement("button");return a.classList.add("btn","btn-secondary"),a.setAttribute("type","submit"),a.innerText="Submit",n.appendChild(a),n.addEventListener("submit",r=>{r.preventDefault()}),n}};function W(e,n="test",s=""){const a=Math.random().toString(36).substring(2,15),r=document.createElement("div");r.classList.add("input-group","mb-3");const o=document.createElement("span");o.classList.add("input-group-text"),o.setAttribute("id",`basic-addon-${a}`),o.innerText=(e==null?void 0:e.addonText)||"@",r.appendChild(o);const t=document.createElement("input");return t.classList.add("form-control"),t.setAttribute("id",a),t.setAttribute("name",n),t.setAttribute("type","text"),e!=null&&e.type&&t.setAttribute("type",e.type),e!=null&&e.readonly&&t.setAttribute("readonly","readonly"),e!=null&&e.disabled&&t.setAttribute("disabled","disabled"),e!=null&&e.required&&t.setAttribute("required","required"),e!=null&&e.pattern&&t.setAttribute("pattern",e.pattern),s&&t.setAttribute("placeholder",s),r.appendChild(t),r}var g,x,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
    \`;
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,h,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
\`;
  }
}`,...(y=(h=p.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,S,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
\`;
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var G,z,T;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
\`;
  }
}`,...(T=(z=u.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var E,A,L;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control" placeholder="First name">
  <input type="text" aria-label="Last name" class="form-control" placeholder="Second name">
</div>
\`;
  }
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var C,U,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
\`;
  }
}`,...(R=(U=c.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var F,O,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
\`;
  }
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var I,$,q;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "email",
    readonly: false,
    disabled: false,
    required: false,
    addonText: "@",
    placeholder: "Enter your email",
    pattern: ""
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "file"]
    }
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
    const form = document.createElement("form");
    form.classList.add("w-100", "p-3", "border", "border-color-white", "rounded");
    const element = getFormGroup(args, "test", args.placeholder);
    form.appendChild(element);
    const button = document.createElement("button");
    button.classList.add("btn", "btn-secondary");
    button.setAttribute("type", "submit");
    button.innerText = "Submit";
    form.appendChild(button);
    form.addEventListener("submit", e => {
      e.preventDefault();
    });
    return form;
  }
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const B=["BasicExample","Wrapping","Sizing","CheckBoxRadio","MultipleInputs","MultipleAddons","Select","Example"];export{i as BasicExample,u as CheckBoxRadio,b as Example,c as MultipleAddons,d as MultipleInputs,m as Select,l as Sizing,p as Wrapping,B as __namedExportsOrder,M as default};
