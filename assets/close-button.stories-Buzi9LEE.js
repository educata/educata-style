const z={title:"Components/Close button"},t={tags:["!dev"],render:()=>`
<button type="button" class="btn-close" aria-label="Close"></button>
`},s={tags:["!dev"],render:()=>`
<button type="button" class="btn-close" aria-label="Close" disabled></button>
`},a={tags:["!dev"],render:()=>`
<button type="button" class="btn-close btn-close-black" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-black" aria-label="Close" disabled></button>
`},n={tags:["!dev"],render:()=>`
<button type="button" class="btn-close btn-close-sm" aria-label="Close"></button>
<button type="button" class="btn-close" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-lg" aria-label="Close"></button>
`},o={args:{size:"default",dark:!1,disabled:!1},argTypes:{size:{control:"select",options:["sm","default","lg"]}},parameters:{backgrounds:{default:"dark"}},render:e=>`
<div class="${e.dark?"bg-white":"bg-main"} p-3">
  <button type="button" class="btn-close btn-close-${e.size} ${e.dark?"btn-close-black":""}" aria-label="Close" ${e.disabled?"disabled":""}></button>
</div>
`};var l,r,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button type="button" class="btn-close" aria-label="Close"></button>
\`;
  }
}`,...(b=(r=t.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var c,u,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button type="button" class="btn-close" aria-label="Close" disabled></button>
\`;
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button type="button" class="btn-close btn-close-black" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-black" aria-label="Close" disabled></button>
\`;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,k,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button type="button" class="btn-close btn-close-sm" aria-label="Close"></button>
<button type="button" class="btn-close" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-lg" aria-label="Close"></button>
\`;
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var C,v,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "default",
    dark: false,
    disabled: false
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"]
    }
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
    return \`
<div class="\${args.dark ? "bg-white" : "bg-main"} p-3">
  <button type="button" class="btn-close btn-close-\${args.size} \${args.dark ? "btn-close-black" : ""}" aria-label="Close" \${args.disabled ? "disabled" : ""}></button>
</div>
\`;
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const $=["Example","Disabled","Black","Sizes","Button"];export{a as Black,o as Button,s as Disabled,t as Example,n as Sizes,$ as __namedExportsOrder,z as default};
