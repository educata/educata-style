import{V as z}from"./variations-ITiYtS3r.js";const O={title:"Components/Button"},n={tags:["!dev"],render:()=>`
<button class="btn">Base class</button>
`},s={tags:["!dev"],render:()=>`
<button class="btn">Base</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-black">Black</button>
<button class="btn btn-white">White</button>
`},e={tags:["!dev"],render:()=>`
<button class="btn">Base</button>
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
<button class="btn btn-outline-black">Black</button>
<button class="btn btn-outline-white">White</button>
`},a={tags:["!dev"],render:()=>`
<button class="btn btn-secondary btn-sm">Secondary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-secondary btn-lg">Secondary</button>
`},o={tags:["!dev"],render:()=>`
<button class="btn btn-secondary">Active</button>
<button class="btn btn-secondary" disabled>Disabled</button>
<button class="btn btn-outline-secondary">Active</button>
<button class="btn btn-outline-secondary" disabled>Disabled</button>
`},r={args:{variation:"primary",size:"default",disabled:!1,outline:!1},argTypes:{variation:{control:"select",options:z},size:{control:"select",options:["sm","default","lg"]}},parameters:{backgrounds:{default:"dark"}},render:t=>`
<div class="btn btn-${t.outline?`outline-${t.variation}`:t.variation} btn-${t.size}" ${t.disabled?"disabled":""}>${t.variation}</div>
`};var b,u,c;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button class="btn">Base class</button>
\`;
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,i,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button class="btn">Base</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-black">Black</button>
<button class="btn btn-white">White</button>
\`;
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button class="btn">Base</button>
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
<button class="btn btn-outline-black">Black</button>
<button class="btn btn-outline-white">White</button>
\`;
  }
}`,...(y=(p=e.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,v,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button class="btn btn-secondary btn-sm">Secondary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-secondary btn-lg">Secondary</button>
\`;
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var B,f,k;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<button class="btn btn-secondary">Active</button>
<button class="btn btn-secondary" disabled>Disabled</button>
<button class="btn btn-outline-secondary">Active</button>
<button class="btn btn-outline-secondary" disabled>Disabled</button>
\`;
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var D,$,h;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variation: "primary",
    size: "default",
    disabled: false,
    outline: false
  },
  argTypes: {
    variation: {
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
<div class="btn btn-\${args.outline ? \`outline-\${args.variation}\` : args.variation} btn-\${args.size}" \${args.disabled ? "disabled" : ""}>\${args.variation}</div>
\`;
  }
}`,...(h=($=r.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};const V=["Example","Variations","Outline","Sizes","Disabled","Button"];export{r as Button,o as Disabled,n as Example,e as Outline,a as Sizes,s as Variations,V as __namedExportsOrder,O as default};
