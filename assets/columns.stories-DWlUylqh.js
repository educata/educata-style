const k={title:"Layout/Columns"},n={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center box p-3">
  <div class="row align-items-start style="min-height: 300px;"">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
`},e={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center box p-3">
  <div class="row align-items-center" style="min-height: 300px;">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
`},o={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center box p-3">
  <div class="row align-items-flex-end" style="min-height: 300px;">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
`},s={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center box p-3">
  <div class="row" style="min-height: 300px;">
    <div class="col box p-3 align-self-flex-start">
      One of three columns
    </div>
    <div class="col box p-3 align-self-center">
      One of three columns
    </div>
    <div class="col box p-3 align-self-flex-end">
      One of three columns
    </div>
  </div>
</div>
`},c={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row justify-content-flex-start">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-flex-end">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-around">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-between">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-evenly">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
</div>
`},l={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container p-3" data-box-width-remove>
  <div class="row">
    <div class="col-9 box p-3">.col-9</div>
    <div class="col-4 box p-3">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6 box p-3">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
`},t={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3" data-box-width-remove>
  <div class="row">
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
  </div>
</div>
`};var i,r,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center box p-3">
  <div class="row align-items-start style="min-height: 300px;"">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
\`;
  }
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var d,v,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center box p-3">
  <div class="row align-items-center" style="min-height: 300px;">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
\`;
  }
}`,...(u=(v=e.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var m,p,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center box p-3">
  <div class="row align-items-flex-end" style="min-height: 300px;">
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
    <div class="col box p-3">
      One of three columns
    </div>
  </div>
</div>
\`;
  }
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,b,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center box p-3">
  <div class="row" style="min-height: 300px;">
    <div class="col box p-3 align-self-flex-start">
      One of three columns
    </div>
    <div class="col box p-3 align-self-center">
      One of three columns
    </div>
    <div class="col box p-3 align-self-flex-end">
      One of three columns
    </div>
  </div>
</div>
\`;
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var g,O,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row justify-content-flex-start">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-flex-end">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-around">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-between">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-space-evenly">
    <div class="col-4 box p-3">
      One of two columns
    </div>
    <div class="col-4 box p-3">
      One of two columns
    </div>
  </div>
</div>
\`;
  }
}`,...(h=(O=c.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var y,S,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container p-3" data-box-width-remove>
  <div class="row">
    <div class="col-9 box p-3">.col-9</div>
    <div class="col-4 box p-3">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6 box p-3">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
\`;
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,V,C;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3" data-box-width-remove>
  <div class="row">
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 box p-3">.col-6 .col-sm-3</div>
  </div>
</div>
\`;
  }
}`,...(C=(V=t.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const q=["VerticalAligment","VerticalAligment2","VerticalAligment3","AlignSelf","Horizontal","ColumnWrapping","ColumnBreaks"];export{s as AlignSelf,t as ColumnBreaks,l as ColumnWrapping,c as Horizontal,n as VerticalAligment,e as VerticalAligment2,o as VerticalAligment3,q as __namedExportsOrder,k as default};
