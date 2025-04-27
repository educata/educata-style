const p={title:"Utilities/Sizing"},i={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<div class="w-25 p-3 box">Width 25%</div>
<div class="w-50 p-3 box">Width 50%</div>
<div class="w-75 p-3 box">Width 75%</div>
<div class="w-100 p-3 box">Width 100%</div>
<div class="w-auto p-3 box">Width auto</div>
`},t={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<div style="height: 100px;" class="d-flex gap-3 box-wrapper">
  <div class="h-25 d-inline-block box">Height 25%</div>
  <div class="h-50 d-inline-block box">Height 50%</div>
  <div class="h-75 d-inline-block box">Height 75%</div>
  <div class="h-100 d-inline-block box">Height 100%</div>
  <div class="h-auto d-inline-block box">Height auto</div>
</div>
`},n={args:{width:"25",height:"25",viewport:!1},parameters:{layout:{type:"fullscreen"}},argTypes:{width:{control:"select",options:["25","50","75","100"]},height:{control:"select",options:["25","50","75","100"]}},render:e=>`
<div class="vw-100 vh-100 d-flex justify-content-center align-items-center">
  <div class="${e.viewport?"v":""}w-${e.width} h-${e.height} p-3 box d-flex justify-content-center align-items-center">Width ${e.width}${e.viewport?"vw":"%"} & Height ${e.height}${e.viewport?"vh":"%"}</div>
</div>
`};var s,d,r;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<div class="w-25 p-3 box">Width 25%</div>
<div class="w-50 p-3 box">Width 50%</div>
<div class="w-75 p-3 box">Width 75%</div>
<div class="w-100 p-3 box">Width 100%</div>
<div class="w-auto p-3 box">Width auto</div>
\`;
  }
}`,...(r=(d=i.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var o,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<div style="height: 100px;" class="d-flex gap-3 box-wrapper">
  <div class="h-25 d-inline-block box">Height 25%</div>
  <div class="h-50 d-inline-block box">Height 50%</div>
  <div class="h-75 d-inline-block box">Height 75%</div>
  <div class="h-100 d-inline-block box">Height 100%</div>
  <div class="h-auto d-inline-block box">Height auto</div>
</div>
\`;
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,v,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    width: "25",
    height: "25",
    viewport: false
  },
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  argTypes: {
    width: {
      control: "select",
      options: ["25", "50", "75", "100"]
    },
    height: {
      control: "select",
      options: ["25", "50", "75", "100"]
    }
  },
  render: args => {
    return \`
<div class="vw-100 vh-100 d-flex justify-content-center align-items-center">
  <div class="\${args.viewport ? "v" : ""}w-\${args.width} h-\${args.height} p-3 box d-flex justify-content-center align-items-center">Width \${args.width}\${args.viewport ? "vw" : "%"} & Height \${args.height}\${args.viewport ? "vh" : "%"}</div>
</div>
\`;
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const g=["Width","Height","Sizing"];export{t as Height,n as Sizing,i as Width,g as __namedExportsOrder,p as default};
