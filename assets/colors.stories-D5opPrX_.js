import{V as l}from"./variations-ITiYtS3r.js";const g={title:"Utilities/Colors"},n={tags:["!dev"],render:()=>`
<div class="d-flex flex-column gap-3">
  ${l.map(a=>`<span class="text-${a} p-2">.text-${a}</span> <span class="text-${a}-bg bg-${a} p-2">.text-${a}-bg</span>`).join("")}
</div>
`},s={args:{variation:"main",background:!1},argTypes:{variation:{control:"select",options:l}},render:a=>`
<div class="d-flex justify-content-center align-items-center">
    <span class="${`text-${a.variation}${a.background?`-bg bg-${a.variation}`:""}`} p-3">.text-${a.variation}${a.background?"-bg":""}</span>
</div>
`};var e,t,r;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => {\n    return `\n<div class="d-flex flex-column gap-3">\n  ${VARIATIONS.map(variation => `<span class="text-${variation} p-2">.text-${variation}</span> <span class="text-${variation}-bg bg-${variation} p-2">.text-${variation}-bg</span>`).join("")}\n</div>\n`;\n  }\n}',...(r=(t=n.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var o,i,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variation: "main",
    background: false
  },
  argTypes: {
    variation: {
      control: "select",
      options: VARIATIONS
    }
  },
  render: args => {
    const classname = \`text-\${args.variation}\${args.background ? \`-bg bg-\${args.variation}\` : ""}\`;
    return \`
<div class="d-flex justify-content-center align-items-center">
    <span class="\${classname} p-3">.text-\${args.variation}\${args.background ? "-bg" : ""}</span>
</div>
\`;
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const m=["Variations","Colors"];export{s as Colors,n as Variations,m as __namedExportsOrder,g as default};
