import{V as A}from"./variations-ITiYtS3r.js";const I={title:"Components/Button Group"},n={tags:["!dev"],render:()=>`
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
`},e={tags:["!dev"],render:()=>`
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
`},o={tags:["!dev"],render:()=>`
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
`},r={tags:["!dev"],render:()=>`
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-success">Right</button>
</div>
`},a={tags:["!dev"],render:()=>`
<div
  class="btn-group btn-group-vertical"
  role="group"
  aria-label="Vertical button group"
>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
`},s={tags:["!dev"],render:()=>`
<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
<div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
`},b={args:{count:3,vertical:!1,size:"default",variation:"secondary"},argTypes:{count:{control:{type:"range",min:1,max:9}},size:{control:"select",options:["sm","default","lg"]},variation:{control:"select",options:A}},parameters:{backgrounds:{default:"dark"}},render:t=>`
<div class="btn-group btn-group-${t.size} ${t.vertical?"btn-group-vertical":""}" role="group" aria-label="Basic example">
  ${new Array(t.count).fill(0).map((E,V)=>`<button type="button" class="btn btn-${t.variation}">${V+1} Element</button>`).join("")}
</div>
`};var u,l,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
\`;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
\`;
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var y,g,m;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-outline-secondary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-secondary">Right</button>
</div>
\`;
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,x,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-secondary">Middle</button>
  <button type="button" class="btn btn-outline-success">Right</button>
</div>
\`;
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,M,R;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div
  class="btn-group btn-group-vertical"
  role="group"
  aria-label="Vertical button group"
>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
\`;
  }
}`,...(R=(M=a.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var h,L,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
<div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
\`;
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var $,z,O;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    count: 3,
    vertical: false,
    size: "default",
    variation: "secondary"
  },
  argTypes: {
    count: {
      control: {
        type: "range",
        min: 1,
        max: 9
      }
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"]
    },
    variation: {
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
<div class="btn-group btn-group-\${args.size} \${args.vertical ? "btn-group-vertical" : ""}" role="group" aria-label="Basic example">
  \${new Array(args.count).fill(0).map((_, i) => {
      return \`<button type="button" class="btn btn-\${args.variation}">\${i + 1} Element</button>\`;
    }).join("")}
</div>
\`;
  }
}`,...(O=(z=b.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const T=["Example","Mixed","Outlined","OutlinedMixed","Vertical","Sizes","Group"];export{n as Example,b as Group,e as Mixed,o as Outlined,r as OutlinedMixed,s as Sizes,a as Vertical,T as __namedExportsOrder,I as default};
