const d={title:"Utilities/Spacing/Centered Div"},t={args:{width:"125px",center:!0},render:n=>{const e=document.createElement("div");return e.classList.add("box","p-3","text-center"),e.innerText="Centered Div",e.style.width=n.width,n.center&&e.classList.toggle("m-auto"),e}};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    width: "125px",
    center: true
  },
  render: args => {
    const div = document.createElement("div");
    div.classList.add("box", "p-3", "text-center");
    div.innerText = "Centered Div";
    div.style.width = args.width;
    if (args.center) {
      div.classList.toggle("m-auto");
    }
    return div;
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const a=["CenteredDiv"];export{t as CenteredDiv,a as __namedExportsOrder,d as default};
