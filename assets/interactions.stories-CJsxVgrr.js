const h=["pointer","default","none","move","text","wait","help","progress","not-allowed","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize"],b={title:"Utilities/Interactions"},e={tags:["!dev"],render:()=>`
<p class="user-select-all p-3">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto p-3">This paragraph has default select behavior.</p>
<p class="user-select-text p-3">This paragraph can be select by user.</p>
<p class="user-select-none p-3">This paragraph will not be selectable when clicked by the user.</p>
`},s={tags:["!dev"],render:()=>`
<p class="p-3"><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p class="p-3"><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
<p class="pe-none p-3"><a href="#" tabindex="-1" aria-disabled="true">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
`},r={args:{cursor:"pointer"},argTypes:{cursor:{control:"select",options:h}},render:u=>`
<div class="cursor-${u.cursor} box p-3">Hover me with mouse to see my cursor type</div>
`};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<p class="user-select-all p-3">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto p-3">This paragraph has default select behavior.</p>
<p class="user-select-text p-3">This paragraph can be select by user.</p>
<p class="user-select-none p-3">This paragraph will not be selectable when clicked by the user.</p>
\`;
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,o,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return \`
<p class="p-3"><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p class="p-3"><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
<p class="pe-none p-3"><a href="#" tabindex="-1" aria-disabled="true">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
\`;
  }
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    cursor: "pointer"
  },
  argTypes: {
    cursor: {
      control: "select",
      options: cursorOptions
    }
  },
  render: args => {
    return \`
<div class="cursor-\${args.cursor} box p-3">Hover me with mouse to see my cursor type</div>
\`;
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const m=["UserSelect","PointerEvents","Cursor"];export{r as Cursor,s as PointerEvents,e as UserSelect,m as __namedExportsOrder,b as default};
