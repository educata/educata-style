const lo={title:"Layout/Grid"},o={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      Column
    </div>
    <div class="col box p-3">
      Column
    </div>
    <div class="col box p-3">
      Column
    </div>
  </div>
</div>
`},s={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      1 of 2
    </div>
    <div class="col box p-3">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col box p-3">
      2 of 3
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
</div>
`},l={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col-6 box p-3">
      2 of 3 (wider)
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col-5 box p-3">
      2 of 3 (wider)
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
</div>
`},n={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2 p-3 box">
      1 of 3
    </div>
    <div class="col-md-auto p-3 box">
      Variable width content
    </div>
    <div class="col col-lg-2 p-3 box">
      3 of 3
    </div>
  </div>
</div>
`},c={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
  </div>
  <div class="row">
    <div class="col-8 box p-3">col-8</div>
    <div class="col-4 box p-3">col-4</div>
  </div>
</div>
`},e={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row">
    <div class="col-sm-8 box p-3">col-sm-8</div>
    <div class="col-sm-4 box p-3">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm box p-3">col-sm</div>
    <div class="col-sm box p-3">col-sm</div>
    <div class="col-sm box p-3">col-sm</div>
  </div>
</div>
`},d={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8 box p-3">.col-md-8</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6 box p-3">.col-6</div>
    <div class="col-6 box p-3">.col-6</div>
  </div>
</div>
`},a={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row row-cols-2">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`},r={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row row-cols-3">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`},i={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row row-cols-auto">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`},v={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row row-cols-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`},t={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row row-cols-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col-6 box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`},p={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
`},m={tags:["!dev"],parameters:{layout:"fullscreen"},render:()=>`
<div class="container text-center p-3 box">
  <div class="row">
    <div class="col-sm-3 box p-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6 box p-3">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6 box p-3">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
`};var u,x,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      Column
    </div>
    <div class="col box p-3">
      Column
    </div>
    <div class="col box p-3">
      Column
    </div>
  </div>
</div>
\`;
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,C,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      1 of 2
    </div>
    <div class="col box p-3">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col box p-3">
      2 of 3
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
</div>
\`;
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var g,y,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col-6 box p-3">
      2 of 3 (wider)
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col box p-3">
      1 of 3
    </div>
    <div class="col-5 box p-3">
      2 of 3 (wider)
    </div>
    <div class="col box p-3">
      3 of 3
    </div>
  </div>
</div>
\`;
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,k,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2 p-3 box">
      1 of 3
    </div>
    <div class="col-md-auto p-3 box">
      Variable width content
    </div>
    <div class="col col-lg-2 p-3 box">
      3 of 3
    </div>
  </div>
</div>
\`;
  }
}`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var L,W,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row">
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
    <div class="col box p-3">col</div>
  </div>
  <div class="row">
    <div class="col-8 box p-3">col-8</div>
    <div class="col-4 box p-3">col-4</div>
  </div>
</div>
\`;
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var A,M,V;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row">
    <div class="col-sm-8 box p-3">col-sm-8</div>
    <div class="col-sm-4 box p-3">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm box p-3">col-sm</div>
    <div class="col-sm box p-3">col-sm</div>
    <div class="col-sm box p-3">col-sm</div>
  </div>
</div>
\`;
  }
}`,...(V=(M=e.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var O,j,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8 box p-3">.col-md-8</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 box p-3">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6 box p-3">.col-6</div>
    <div class="col-6 box p-3">.col-6</div>
  </div>
</div>
\`;
  }
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,B,H;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row row-cols-2">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
\`;
  }
}`,...(H=(B=a.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var N,_,G;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row row-cols-3">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
\`;
  }
}`,...(G=(_=r.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var D,F,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row row-cols-auto">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
\`;
  }
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var J,K,P;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row row-cols-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
\`;
  }
}`,...(P=(K=v.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,T,U;t.parameters={...t.parameters,docs:{...(Q=t.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row row-cols-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col-6 box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
\`;
  }
}`,...(U=(T=t.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
    <div class="col box p-3">Column</div>
  </div>
</div>
\`;
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,oo,so;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    return \`
<div class="container text-center p-3 box">
  <div class="row">
    <div class="col-sm-3 box p-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6 box p-3">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6 box p-3">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
\`;
  }
}`,...(so=(oo=m.parameters)==null?void 0:oo.docs)==null?void 0:so.source}}};const no=["Example","EqualWidth","OneColumnWidth","VariableWidth","AllBreakpoints","StackedHorizontal","MixAndMatch","RowColumns1","RowColumns2","RowColumns3","RowColumns4","RowColumns5","RowColumns6","Nesting"];export{c as AllBreakpoints,s as EqualWidth,o as Example,d as MixAndMatch,m as Nesting,l as OneColumnWidth,a as RowColumns1,r as RowColumns2,i as RowColumns3,v as RowColumns4,t as RowColumns5,p as RowColumns6,e as StackedHorizontal,n as VariableWidth,no as __namedExportsOrder,lo as default};
