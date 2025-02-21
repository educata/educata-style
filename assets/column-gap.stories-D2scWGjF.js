const s={title:"Utilities/Spacing/ColumnGap"},n={args:{elementCount:8,gapLevel:3,maxWidth:"500px"},argTypes:{elementCount:{control:{type:"range",min:1,max:9}},gapLevel:{control:{type:"range",min:0,max:5}}},render:t=>{const e=document.createElement("div");e.classList.add("d-flex","flex-wrap-wrap","m-auto"),e.style.maxWidth=t.maxWidth,e.classList.add(`column-gap-${t.gapLevel}`);const r=document.createDocumentFragment();for(let a=0;a<t.elementCount;a++){const m=document.createElement("div");m.classList.add("box","p-3"),m.innerText=`Element ${a+1}`,r.appendChild(m)}return e.appendChild(r),e}};var l,d,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    div.classList.add("d-flex", "flex-wrap-wrap", "m-auto");
    div.style.maxWidth = args.maxWidth;
    div.classList.add(\`column-gap-\${args.gapLevel}\`);
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
}`,...(o=(d=n.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const i=["ColumnGap"];export{n as ColumnGap,i as __namedExportsOrder,s as default};
