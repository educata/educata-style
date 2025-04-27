const w={title:"Utilities/Spacing"},n={args:{elementCount:8,gapLevel:3,maxWidth:"500px"},argTypes:{elementCount:{control:{type:"range",min:1,max:9}},gapLevel:{control:{type:"range",min:0,max:5}}},render:s=>{const e=document.createElement("div");e.classList.add("d-flex","flex-wrap","m-auto"),e.style.maxWidth=s.maxWidth,e.classList.add(`gap-${s.gapLevel}`);const i=document.createDocumentFragment();for(let l=0;l<s.elementCount;l++){const r=document.createElement("div");r.classList.add("box","p-3"),r.innerText=`Element ${l+1}`,i.appendChild(r)}return e.appendChild(i),e}},a={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="d-flex flex-wrap row-gap-3 m-atuo" style="max-width: 500px;">
  <div class="box p-3">Element 1</div>
  <div class="box p-3">Element 2</div>
  <div class="box p-3">Element 3</div>
  <div class="box p-3">Element 4</div>
  <div class="box p-3">Element 5</div>
  <div class="box p-3">Element 6</div>
  <div class="box p-3">Element 7</div>
  <div class="box p-3">Element 8</div>
</div>
`},t={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="d-flex flex-wrap column-gap-3 m-auto" style="max-width: 500px;">
  <div class="box p-3">Element 1</div>
  <div class="box p-3">Element 2</div>
  <div class="box p-3">Element 3</div>
  <div class="box p-3">Element 4</div>
  <div class="box p-3">Element 5</div>
  <div class="box p-3">Element 6</div>
  <div class="box p-3">Element 7</div>
  <div class="box p-3">Element 8</div>
</div>
`},d={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="m-auto">
  <div class="box p-3">Element</div>
</div>
`};var o,m,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    elementCount: 8,
    gapLevel: 3,
    maxWidth: "500px"
  },
  argTypes: {
    elementCount: {
      control: {
        type: "range",
        min: 1,
        max: 9
      }
    },
    gapLevel: {
      control: {
        type: "range",
        min: 0,
        max: 5
      }
    }
  },
  render: args => {
    const div = document.createElement("div");
    div.classList.add("d-flex", "flex-wrap", "m-auto");
    div.style.maxWidth = args.maxWidth;
    div.classList.add(\`gap-\${args.gapLevel}\`);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < args.elementCount; i++) {
      const element = document.createElement("div");
      element.classList.add("box", "p-3");
      element.innerText = \`Element \${i + 1}\`;
      fragment.appendChild(element);
    }
    div.appendChild(fragment);
    return div;
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,v,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="d-flex flex-wrap row-gap-3 m-atuo" style="max-width: 500px;">
  <div class="box p-3">Element 1</div>
  <div class="box p-3">Element 2</div>
  <div class="box p-3">Element 3</div>
  <div class="box p-3">Element 4</div>
  <div class="box p-3">Element 5</div>
  <div class="box p-3">Element 6</div>
  <div class="box p-3">Element 7</div>
  <div class="box p-3">Element 8</div>
</div>
\`;
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="d-flex flex-wrap column-gap-3 m-auto" style="max-width: 500px;">
  <div class="box p-3">Element 1</div>
  <div class="box p-3">Element 2</div>
  <div class="box p-3">Element 3</div>
  <div class="box p-3">Element 4</div>
  <div class="box p-3">Element 5</div>
  <div class="box p-3">Element 6</div>
  <div class="box p-3">Element 7</div>
  <div class="box p-3">Element 8</div>
</div>
\`;
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var E,f,h;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="m-auto">
  <div class="box p-3">Element</div>
</div>
\`;
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const C=["Gap","RowGap","ColGap","CenteredDiv"];export{d as CenteredDiv,t as ColGap,n as Gap,a as RowGap,C as __namedExportsOrder,w as default};
