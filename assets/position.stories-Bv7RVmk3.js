const o={title:"Utilities/Position"},i={args:{position:"static"},argTypes:{position:{control:"select",options:["static","relative","absolute","fixed","sticky"]}},render:a=>`
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box-primary-active position-${a.position}" style="${a.position==="sticky"?"top: 15px":""}">Position ${a.position}</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
`};var t,e,s;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    position: "static"
  },
  argTypes: {
    position: {
      control: "select",
      options: ["static", "relative", "absolute", "fixed", "sticky"]
    }
  },
  render: args => {
    return \`
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box-primary-active position-\${args.position}" style="\${args.position === "sticky" ? "top: 15px" : ""}">Position \${args.position}</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
<div class="p-3 w-100 box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic voluptates dolorum voluptatibus expedita totam illo, esse vitae quia eligendi accusantium adipisci ipsa atque obcaecati repudiandae? Illum alias cupiditate amet?</div>
\`;
  }
}`,...(s=(e=i.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const u=["Position"];export{i as Position,u as __namedExportsOrder,o as default};
