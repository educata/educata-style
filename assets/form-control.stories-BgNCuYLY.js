const V={title:"Forms/Form Control",parameters:{backgrounds:{default:"dark"}}},s={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
`},d={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<input class="form-control form-control-sm mb-3" type="text" placeholder="Small input" />
<input class="form-control mb-3" type="text" placeholder="Default input" />
<input class="form-control form-control-lg mb-3" type="text" placeholder="Large input" />
    `},i={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" placeholder="Some strong password" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
    `},c={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="mb-3">
  <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
</div>
<div class="mb-3">
  <label for="disabledTextInput" class="form-label">Disabled input with label</label>
  <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" disabled>
</div>
`},m={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="mb-3">
  <input class="form-control" type="text" placeholder="Readonly input" aria-label="Readonly input example" readonly>
</div>
<div class="mb-3">
  <label for="readonlyTextInput" class="form-label">Readonly input with label</label>
  <input type="text" id="readonlyTextInput" class="form-control" placeholder="Readonly input" readonly>
</div>
`},p={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
`},u={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
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
`},b={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<input class="form-control" type="color" id="colorInput">
`},f={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
`},v={args:{type:"text",readonly:!1,disabled:!1,required:!1,labelText:"Username",placeholder:"Enter your name",pattern:""},argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","file"]}},parameters:{backgrounds:{default:"dark"}},render:e=>{const l=document.createElement("form");l.classList.add("w-100","p-3","border","border-color-white","rounded");const x=Q(e,"test",e.labelText,e.placeholder);l.appendChild(x);const r=document.createElement("button");return r.classList.add("btn","btn-secondary"),r.setAttribute("type","submit"),r.innerText="Submit",l.appendChild(r),l.addEventListener("submit",t=>{t.preventDefault()}),l}};function Q(e,l="test",x="Label",r=""){const t=Math.random().toString(36).substring(2,15),o=document.createElement("div");o.classList.add("mb-3");const n=document.createElement("label");n.classList.add("form-label"),n.setAttribute("for",t),n.innerText=x;const a=document.createElement("input");return a.classList.add("form-control"),a.setAttribute("id",t),a.setAttribute("name",l),a.setAttribute("type","text"),e!=null&&e.type&&a.setAttribute("type",e.type),e!=null&&e.readonly&&a.setAttribute("readonly","readonly"),e!=null&&e.disabled&&a.setAttribute("disabled","disabled"),e!=null&&e.required&&a.setAttribute("required","required"),e!=null&&e.pattern&&a.setAttribute("pattern",e.pattern),r&&a.setAttribute("placeholder",r),o.appendChild(n),o.appendChild(a),o}var y,g,F;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
\`;
  }
}`,...(F=(g=s.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var k,h,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<input class="form-control form-control-sm mb-3" type="text" placeholder="Small input" />
<input class="form-control mb-3" type="text" placeholder="Default input" />
<input class="form-control form-control-lg mb-3" type="text" placeholder="Large input" />
    \`;
  }
}`,...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var C,D,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" placeholder="Some strong password" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
    \`;
  }
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,L,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="mb-3">
  <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
</div>
<div class="mb-3">
  <label for="disabledTextInput" class="form-label">Disabled input with label</label>
  <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" disabled>
</div>
\`;
  }
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,A,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="mb-3">
  <input class="form-control" type="text" placeholder="Readonly input" aria-label="Readonly input example" readonly>
</div>
<div class="mb-3">
  <label for="readonlyTextInput" class="form-label">Readonly input with label</label>
  <input type="text" id="readonlyTextInput" class="form-control" placeholder="Readonly input" readonly>
</div>
\`;
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var R,M,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
\`;
  }
}`,...(q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var O,B,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
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
\`;
  }
}`,...(H=(B=u.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var Y,j,z;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<input class="form-control" type="color" id="colorInput">
\`;
  }
}`,...(z=(j=b.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var N,U,_;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
\`;
  }
}`,...(_=(U=f.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "text",
    readonly: false,
    disabled: false,
    required: false,
    labelText: "Username",
    placeholder: "Enter your name",
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
    const element = getFormControl(args, "test", args.labelText, args.placeholder);
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
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const W=["DefaultForm","FormControlSizing","FormText","FormControlDisabled","FormControlReadonly","FormControlPlainText","FormControlFileInput","FormControlColorInput","FormControlDataList","Example"];export{s as DefaultForm,v as Example,b as FormControlColorInput,f as FormControlDataList,c as FormControlDisabled,u as FormControlFileInput,p as FormControlPlainText,m as FormControlReadonly,d as FormControlSizing,i as FormText,W as __namedExportsOrder,V as default};
