const d={title:"Utilities/Opacity"},i={tags:["!dev"],render:()=>`
<div class="opacity-100 d-inline box p-3">100%</div>
<div class="opacity-75 d-inline box p-3">75%</div>
<div class="opacity-50 d-inline box p-3">50%</div>
<div class="opacity-25 d-inline box p-3">25%</div>
<div class="opacity-0 d-inline box p-3">0%</div>
`},n={args:{opacity:"50"},argTypes:{opacity:{control:"select",options:["0","25","50","75","100"]}},render:a=>`
<div class="opacity-${a.opacity} d-inline box p-3">${a.opacity}%</div>
`};var e,s,o;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="opacity-100 d-inline box p-3">100%</div>
<div class="opacity-75 d-inline box p-3">75%</div>
<div class="opacity-50 d-inline box p-3">50%</div>
<div class="opacity-25 d-inline box p-3">25%</div>
<div class="opacity-0 d-inline box p-3">0%</div>
\`;
  }
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,t,r;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    opacity: "50"
  },
  argTypes: {
    opacity: {
      control: "select",
      options: ["0", "25", "50", "75", "100"]
    }
  },
  render: args => {
    return \`
<div class="opacity-\${args.opacity} d-inline box p-3">\${args.opacity}%</div>
\`;
  }
}`,...(r=(t=n.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const p=["Example","Opacity"];export{i as Example,n as Opacity,p as __namedExportsOrder,d as default};
