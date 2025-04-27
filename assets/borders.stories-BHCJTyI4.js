import{V as N}from"./variations-ITiYtS3r.js";const C=["top","bottom","left","right"],V={title:"Utilities/Borders"},e={tags:["!dev"],render:()=>`
<div class="d-flex justify-content-center gap-3" data-box-example>
    ${["border",...C.map(t=>`border-${t}`)].map(t=>`<div class="${t} p-5"></div>`).join("")}
</div>
`},d={tags:["!dev"],render:()=>`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border border-0 p-5"></div>
  <div class="border border-top-0 p-5"></div>
  <div class="border border-right-0 p-5"></div>
  <div class="border border-bottom-0 p-5"></div>
  <div class="border border-left-0 p-5"></div>
</div>
`},s={tags:["!dev"],render:()=>`
<div class="d-flex justify-content-center gap-3" data-box-example>
    ${N.map(r=>`<div class="border border-color-${r} p-5"></div>`).join("")}
</div>
`},n={tags:["!dev"],render:()=>`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border border-1 p-5"></div>
  <div class="border border-2 p-5"></div>
  <div class="border border-3 p-5"></div>
  <div class="border border-4 p-5"></div>
  <div class="border border-5 p-5"></div>
</div>
`},o={tags:["!dev"],render:()=>`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border rounded p-5"></div>
</div>
`},a={tags:["!dev"],render:()=>`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border rounded p-5"></div>
  <div class="border rounded-sm p-5"></div>
  <div class="border rounded-lg p-5"></div>
  <div class="border rounded-xl p-5"></div>
  <div class="border rounded-xxl p-5"></div>
  <div class="border rounded-pill p-5"></div>
  <div class="border rounded-circle p-5"></div>
</div>
`},i={args:{variation:"main",width:1,radius:"sm"},argTypes:{variation:{control:"select",options:N},width:{control:"select",options:[1,2,3,4,5]},radius:{control:"select",options:["rounded","sm","lg","xl","xxl","pill","circle"]}},render:r=>`
<div class="d-flex justify-content-center align-items-center" data-box-example>
    <div class="border border-color-${r.variation} border-${r.width} rounded rounded-${r.radius} p-5"></div>
</div>
`};var c,l,v;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    const placements = ["border", ...PLACEMENTS.map(placement => \`border-\${placement}\`)];
    return \`
<div class="d-flex justify-content-center gap-3" data-box-example>
    \${placements.map(placement => \`<div class="\${placement} p-5"></div>\`).join("")}
</div>
\`;
  }
}`,...(v=(l=e.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var p,b,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border border-0 p-5"></div>
  <div class="border border-top-0 p-5"></div>
  <div class="border border-right-0 p-5"></div>
  <div class="border border-bottom-0 p-5"></div>
  <div class="border border-left-0 p-5"></div>
</div>
\`;
  }
}`,...(u=(b=d.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var m,x,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex justify-content-center gap-3" data-box-example>
    \${VARIATIONS.map(variation => \`<div class="border border-color-\${variation} p-5"></div>\`).join("")}
</div>
\`;
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,j,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border border-1 p-5"></div>
  <div class="border border-2 p-5"></div>
  <div class="border border-3 p-5"></div>
  <div class="border border-4 p-5"></div>
  <div class="border border-5 p-5"></div>
</div>
\`;
  }
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var S,$,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border rounded p-5"></div>
</div>
\`;
  }
}`,...(h=($=o.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var A,R,T;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<div class="d-flex justify-content-center gap-3" data-box-example>
  <div class="border rounded p-5"></div>
  <div class="border rounded-sm p-5"></div>
  <div class="border rounded-lg p-5"></div>
  <div class="border rounded-xl p-5"></div>
  <div class="border rounded-xxl p-5"></div>
  <div class="border rounded-pill p-5"></div>
  <div class="border rounded-circle p-5"></div>
</div>
\`;
  }
}`,...(T=(R=a.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var w,I,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variation: "main",
    width: 1,
    radius: "sm"
  },
  argTypes: {
    variation: {
      control: "select",
      options: VARIATIONS
    },
    width: {
      control: "select",
      options: [1, 2, 3, 4, 5]
    },
    radius: {
      control: "select",
      options: ["rounded", "sm", "lg", "xl", "xxl", "pill", "circle"]
    }
  },
  render: args => {
    return \`
<div class="d-flex justify-content-center align-items-center" data-box-example>
    <div class="border border-color-\${args.variation} border-\${args.width} rounded rounded-\${args.radius} p-5"></div>
</div>
\`;
  }
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const B=["Additive","Subtractive","Color","Width","Radius","RadiusSize","Border"];export{e as Additive,i as Border,s as Color,o as Radius,a as RadiusSize,d as Subtractive,n as Width,B as __namedExportsOrder,V as default};
