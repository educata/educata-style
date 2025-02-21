const o={title:"Utilities/Spacing/Gap"},n={args:{elementCount:8,gapLevel:3,maxWidth:"500px"},argTypes:{elementCount:{control:{type:"range",min:1,max:9}},gapLevel:{control:{type:"range",min:0,max:5}}},render:t=>{const e=document.createElement("div");e.classList.add("d-flex","flex-wrap-wrap","m-auto"),e.style.maxWidth=t.maxWidth,e.classList.add(`gap-${t.gapLevel}`);const d=document.createDocumentFragment();for(let a=0;a<t.elementCount;a++){const r=document.createElement("div");r.classList.add("box","p-3"),r.innerText=`Element ${a+1}`,d.appendChild(r)}return e.appendChild(d),e}};var m,l,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const i=["Gap"];export{n as Gap,i as __namedExportsOrder,o as default};
