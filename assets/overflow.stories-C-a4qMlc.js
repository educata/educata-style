const r={title:"Utilities/Overflow"},e={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<div class="d-flex gap-3">
  <div class="overflow-auto box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-hidden box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-visible box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-scroll box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
  </div>
</div>
`},i={args:{overflow:"auto",maxWidth:"200px",maxHeight:"200px"},argTypes:{overflow:{control:"select",options:["auto","hidden","scroll","visible"]}},render:n=>`
<div class="overflow-${n.overflow} fs-xxl box p-3" style="max-width: ${n.maxWidth}; max-height: ${n.maxHeight}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid incidunt eum aperiam qui eligendi nesciunt reiciendis quisquam atque numquam vero minima deleniti hic facere saepe, totam laboriosam commodi dolorum explicabo!</div>
`};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<div class="d-flex gap-3">
  <div class="overflow-auto box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-hidden box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-visible box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.
  </div>
  <div class="overflow-scroll box p-3 fs-3" style="max-width: 200px; max-height: 200px; min-width: min-content">
    This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
  </div>
</div>
\`;
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,d,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    overflow: "auto",
    maxWidth: "200px",
    maxHeight: "200px"
  },
  argTypes: {
    overflow: {
      control: "select",
      options: ["auto", "hidden", "scroll", "visible"]
    }
  },
  render: args => {
    return \`
<div class="overflow-\${args.overflow} fs-xxl box p-3" style="max-width: \${args.maxWidth}; max-height: \${args.maxHeight}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid incidunt eum aperiam qui eligendi nesciunt reiciendis quisquam atque numquam vero minima deleniti hic facere saepe, totam laboriosam commodi dolorum explicabo!</div>
\`;
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const m=["Example","Overflow"];export{e as Example,i as Overflow,m as __namedExportsOrder,r as default};
