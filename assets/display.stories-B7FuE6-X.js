const g={title:"Utilities/Display"},e={tags:["!dev"],render:()=>`
<div class="d-inline p-2 bg-primary">d-inline</div>
<div class="d-inline p-2 bg-secondary">d-inline</div>
`},n={tags:["!dev"],render:()=>`
<div class="d-block p-2 bg-success">d-block</div>
<div class="d-block p-2 bg-danger">d-block</div>
`},r={args:{display:"block"},argTypes:{display:{control:"select",options:["block","inline","inline-block","none","flex","inline-flex","grid","inline-grid","table","table-row","table-cell"]}},render:s=>`
<div class="d-${s.display} p-2 bg-primary">d-${s.display}</div>
`};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-inline p-2 bg-primary">d-inline</div>
<div class="d-inline p-2 bg-secondary">d-inline</div>
\`;
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var a,c,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-block p-2 bg-success">d-block</div>
<div class="d-block p-2 bg-danger">d-block</div>
\`;
  }
}`,...(o=(c=n.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var t,p,b;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    display: "block"
  },
  argTypes: {
    display: {
      control: "select",
      options: ["block", "inline", "inline-block", "none", "flex", "inline-flex", "grid", "inline-grid", "table", "table-row", "table-cell"]
    }
  },
  render: args => {
    return \`
<div class="d-\${args.display} p-2 bg-primary">d-\${args.display}</div>
\`;
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const v=["Inline","Block","Display"];export{n as Block,r as Display,e as Inline,v as __namedExportsOrder,g as default};
