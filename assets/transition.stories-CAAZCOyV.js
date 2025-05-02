const t={title:"Variables/Transition"},r={tags:["!dev"],render:()=>`
<style>
  #transition-example div:nth-child(1) {
    transition: var(--ec-transition-linear);
  }
  #transition-example div:nth-child(2) {
    transition: var(--ec-transition-ease);
  }
  #transition-example div:nth-child(3) {
    transition: var(--ec-transition-ease-in);
  }
  #transition-example div:nth-child(4) {
    transition: var(--ec-transition-ease-out);
  }
  #transition-example div:nth-child(5) {
    transition: var(--ec-transition-ease-in-out);
  }
  #transition-example div:hover {
    background-color: var(--ec-secondary-bg-color);
  }
</style>
<div class="d-flex flex-wrap gap-3 justify-content-center align-items-center" id="transition-example">
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
</div>
`};var n,i,e;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<style>
  #transition-example div:nth-child(1) {
    transition: var(--ec-transition-linear);
  }
  #transition-example div:nth-child(2) {
    transition: var(--ec-transition-ease);
  }
  #transition-example div:nth-child(3) {
    transition: var(--ec-transition-ease-in);
  }
  #transition-example div:nth-child(4) {
    transition: var(--ec-transition-ease-out);
  }
  #transition-example div:nth-child(5) {
    transition: var(--ec-transition-ease-in-out);
  }
  #transition-example div:hover {
    background-color: var(--ec-secondary-bg-color);
  }
</style>
<div class="d-flex flex-wrap gap-3 justify-content-center align-items-center" id="transition-example">
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
  <div class="p-5 cursor-pointer bg-primary border rounded"></div>
</div>
\`;
  }
}`,...(e=(i=r.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const a=["Example"];export{r as Example,a as __namedExportsOrder,t as default};
