const i={title:"Utilities/Float"},e={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<div class="float-left">Float Left</div><br />
<div class="float-right">Float Right</div><br />
<div class="float-none">Float none</div>
`},t={args:{float:"none"},parameters:{layout:{type:"fullscreen"}},argTypes:{float:{control:"select",options:["none","left","right"]}},render:a=>`
<div class="float-${a.float}">Float ${a.float}</div>
`};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<div class="float-left">Float Left</div><br />
<div class="float-right">Float Right</div><br />
<div class="float-none">Float none</div>
\`;
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var l,s,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    float: "none"
  },
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  argTypes: {
    float: {
      control: "select",
      options: ["none", "left", "right"]
    }
  },
  render: args => {
    return \`
<div class="float-\${args.float}">Float \${args.float}</div>
\`;
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const d=["Example","Float"];export{e as Example,t as Float,d as __namedExportsOrder,i as default};
