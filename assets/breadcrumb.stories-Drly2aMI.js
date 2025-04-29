const p={title:"Components/Breadcrumb"},a={tags:["!dev"],render:()=>`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
`},r={tags:["!dev"],render:()=>`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb" style="--ec-breadcrumb-divider: '>';">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
`},e={args:{count:3},argTypes:{count:{control:{type:"range",min:1,max:9}}},parameters:{backgrounds:{default:"dark"}},render:d=>`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    ${new Array(d.count).fill(0).map((v,o)=>`<li class="breadcrumb-item"><a href="#">Item ${o+1}</a></li>`).join("")}
  </ol>
</nav>
`};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
\`;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,s,b;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb" style="--ec-breadcrumb-divider: '>';">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
\`;
  }
}`,...(b=(s=r.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var m,t,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    count: 3
  },
  argTypes: {
    count: {
      control: {
        type: "range",
        min: 1,
        max: 9
      }
    }
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: args => {
    return \`
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    \${new Array(args.count).fill(0).map((_, i) => {
      return \`<li class="breadcrumb-item"><a href="#">Item \${i + 1}</a></li>\`;
    }).join("")}
  </ol>
</nav>
\`;
  }
}`,...(u=(t=e.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};const g=["Example","Dividers","Breadcrumb"];export{e as Breadcrumb,r as Dividers,a as Example,g as __namedExportsOrder,p as default};
