import{V as x}from"./variations-ITiYtS3r.js";const y={title:"Components/Spinner"},n={tags:["!dev"],render:()=>`
<div class="d-flex flex-column gap-3">
  <div class="spinner"></div>
  <div class="spinner spinner-primary"></div>
  <div class="spinner spinner-secondary"></div>
  <div class="spinner spinner-success"></div>
  <div class="spinner spinner-danger"></div>
  <div class="spinner spinner-white"></div>
  <div class="bg-white d-flex flex-column gap-3 p-3">
    <div class="spinner spinner-black"></div>
    <div class="spinner spinner-main"></div>
  </div>
</div>
`},e={tags:["!dev"],render:()=>`
<div class="d-flex flex-column gap-3">
  <div class="spinner spinner-sm"></div>
  <div class="spinner"></div>
  <div class="spinner spinner-lg"></div>
</div>
`},s={tags:["!dev"],render:()=>`
<div class="d-flex flex-column gap-3">
  <div class="spinner"></div>
  <div class="spinner spinner-reverse"></div>
</div>
`},r={args:{spinner:"primary",size:"default",reverse:!1},argTypes:{spinner:{control:"select",options:x},size:{control:"select",options:["sm","default","lg"]}},parameters:{backgrounds:{default:"dark"}},render:i=>`
<div class="spinner spinner-${i.spinner} spinner-${i.size} ${i.reverse?"spinner-reverse":""}"></div>
`};var a,d,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex flex-column gap-3">
  <div class="spinner"></div>
  <div class="spinner spinner-primary"></div>
  <div class="spinner spinner-secondary"></div>
  <div class="spinner spinner-success"></div>
  <div class="spinner spinner-danger"></div>
  <div class="spinner spinner-white"></div>
  <div class="bg-white d-flex flex-column gap-3 p-3">
    <div class="spinner spinner-black"></div>
    <div class="spinner spinner-main"></div>
  </div>
</div>
\`;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,l,v;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex flex-column gap-3">
  <div class="spinner spinner-sm"></div>
  <div class="spinner"></div>
  <div class="spinner spinner-lg"></div>
</div>
\`;
  }
}`,...(v=(l=e.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var o,t,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex flex-column gap-3">
  <div class="spinner"></div>
  <div class="spinner spinner-reverse"></div>
</div>
\`;
  }
}`,...(m=(t=s.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    spinner: "primary",
    size: "default",
    reverse: false
  },
  argTypes: {
    spinner: {
      control: "select",
      options: VARIATIONS
    },
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
<div class="spinner spinner-\${args.spinner} spinner-\${args.size} \${args.reverse ? "spinner-reverse" : ""}"></div>
\`;
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const z=["Example","Size","Reverse","Spinner"];export{n as Example,s as Reverse,e as Size,r as Spinner,z as __namedExportsOrder,y as default};
