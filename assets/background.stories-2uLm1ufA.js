import{V as c}from"./variations-ITiYtS3r.js";const v={title:"Utilities/Background"},e={tags:["!dev"],render:()=>`
<div class="d-flex gap-3 flex-column">
    ${c.map(n=>`<div class="bg-${n} text-${n}-bg rounded p-3">.bg-${n}</div>`).join("")}
</div>
`},r={args:{variation:"main"},argTypes:{variation:{control:"select",options:c}},render:n=>`
<div class="d-flex justify-content-center align-items-center">
    <div class="bg-${n.variation} rounded p-3">
        .bg-${n.variation}
    </div>
</div>
`};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex gap-3 flex-column">
    \${VARIATIONS.map(variation => \`<div class="bg-\${variation} text-\${variation}-bg rounded p-3">.bg-\${variation}</div>\`).join("")}
</div>
\`;
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var i,o,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variation: "main"
  },
  argTypes: {
    variation: {
      control: "select",
      options: VARIATIONS
    }
  },
  render: args => {
    return \`
<div class="d-flex justify-content-center align-items-center">
    <div class="bg-\${args.variation} rounded p-3">
        .bg-\${args.variation}
    </div>
</div>
\`;
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const g=["Examples","Background"];export{r as Background,e as Examples,g as __namedExportsOrder,v as default};
