import{V as h}from"./variations-ITiYtS3r.js";const v={title:"Components/Chip"},i={tags:["!dev"],render:()=>`
<div class="d-flex flex-column gap-3">
  <div class="chip">Default chip</div>
  <div class="chip chip-primary">Primary chip</div>
  <div class="chip chip-secondary">Secondary chip</div>
  <div class="chip chip-success">Success chip</div>
  <div class="chip chip-danger">Danger chip</div>
  <div class="chip chip-white">White chip</div>
  <div class="bg-white d-flex flex-column gap-3 p-3">
    <div class="chip chip-black">Black chip</div>
    <div class="chip chip-main">Main chip</div>
  </div>
</div>
`},c={args:{chip:"primary"},argTypes:{chip:{control:"select",options:h}},parameters:{backgrounds:{default:"dark"}},render:s=>`
<div class="chip chip-${s.chip}">.chip-${s.chip}</div>
`};var a,p,e;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex flex-column gap-3">
  <div class="chip">Default chip</div>
  <div class="chip chip-primary">Primary chip</div>
  <div class="chip chip-secondary">Secondary chip</div>
  <div class="chip chip-success">Success chip</div>
  <div class="chip chip-danger">Danger chip</div>
  <div class="chip chip-white">White chip</div>
  <div class="bg-white d-flex flex-column gap-3 p-3">
    <div class="chip chip-black">Black chip</div>
    <div class="chip chip-main">Main chip</div>
  </div>
</div>
\`;
  }
}`,...(e=(p=i.parameters)==null?void 0:p.docs)==null?void 0:e.source}}};var r,n,d;c.parameters={...c.parameters,docs:{...(r=c.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    chip: "primary"
  },
  argTypes: {
    chip: {
      control: "select",
      options: VARIATIONS
    }
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
    return \`
<div class="chip chip-\${args.chip}">.chip-\${args.chip}</div>
\`;
  }
}`,...(d=(n=c.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const t=["Example","Chip"];export{c as Chip,i as Example,t as __namedExportsOrder,v as default};
