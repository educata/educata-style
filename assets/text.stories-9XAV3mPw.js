const te={title:"Utilities/Text"},n={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="text-start p-3">Start aligned text</p>
<p class="text-center p-3">Center aligned text</p>
<p class="text-end p-3">End aligned text</p>
`},s={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<div class="bg-primary text-wrap-normal text-center p-1 rounded" style="width: 6rem;">
  This text should wrap.
</div>
`},r={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<div class="bg-primary text-wrap-nowrap text-center p-1 rounded" style="width: 6rem;">
  This text should overflow the parent.
</div>
`},a={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="text-break-all p-3">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
`},m={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="text-keep-all p-3">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
`},p={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="text-lowercase p-3">Lowercased text.</p>
<p class="text-uppercase p-3">Uppercased text.</p>
<p class="text-capitalize p-3">CapiTaliZed text.</p>
`},o={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="fs-1 p-3">.fs-1 text</p>
<p class="fs-2 p-3">.fs-2 text</p>
<p class="fs-3 p-3">.fs-3 text</p>
<p class="fs-4 p-3">.fs-4 text</p>
<p class="fs-5 p-3">.fs-5 text</p>
<p class="fs-6 p-3">.fs-6 text</p>
`},i={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="fw-9 fs-3 p-3">.fw-9</p>
<p class="fw-8 fs-3 p-3">.fw-8</p>
<p class="fw-7 fs-3 p-3">.fw-7</p>
<p class="fw-6 fs-3 p-3">.fw-6</p>
<p class="fw-5 fs-3 p-3">.fw-5</p>
<p class="fw-4 fs-3 p-3">.fw-4</p>
<p class="fw-3 fs-3 p-3">.fw-3</p>
<p class="fw-2 fs-3 p-3">.fw-2</p>
<p class="fw-1 fs-3 p-3">.fw-1</p>
`},l={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="fs-normal fs-3 p-3">.fs-normal</p>
<p class="fs-italic fs-3 p-3">.fs-italic</p>
<p class="fs-oblique fs-3 p-3">.fs-oblique</p>
`},c={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="lh-1 p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-sm p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-base p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-lg p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
`},d={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="text-decoration-underline p-3">This text has a line underneath it.</p>
<p class="text-decoration-overline p-3">This text has a line over it.</p>
<a href="#" class="text-decoration-none p-3">This link has its text decoration removed</a>
<p class="text-decoration-line-through p-3">This text has a line going through it.</p>
`},u={tags:["!dev"],parameters:{layout:{type:"fullscreen"}},render:()=>`
<p class="text-secondary p-3">
  Secondary text with a <a href="#" class="text-reset">reset link</a>.
</p>
<p class="text-secondary p-3">
  Secondary text without a <a href="#">reset link</a>.
</p>
`},h={args:{align:"start",wrap:"normal",break:"break-all",size:"3",weight:"3",style:"none",lineHeight:"base",decoration:"none",transform:"lowercase"},parameters:{layout:{type:"fullscreen"}},argTypes:{align:{control:{type:"select"},options:["start","center","end"],description:"Text alignment"},wrap:{control:{type:"select"},options:["normal","nowrap","wrap"],description:"Text wrapping behavior"},break:{control:{type:"select"},options:["break-all","keep-all"],description:"Text breaking behavior"},size:{control:{type:"select"},options:["1","2","3","4","5","6"],description:"Font size"},weight:{control:{type:"select"},options:["1","2","3","4","5","6","7","8","9"],description:"Font weight"},style:{control:{type:"select"},options:["none","normal","italic","oblique"],description:"Font style"},lineHeight:{control:{type:"select"},options:["1","sm","base","lg"],description:"Line height"},decoration:{control:{type:"select"},options:["none","underline","overline","line-through"],description:"Text decoration"},transform:{control:{type:"select"},options:["lowercase","uppercase","capitalize"],description:"Text transformation"}},render:e=>{const f=document.createElement("div");f.classList.add("vh-100","vw-100","d-flex","justify-content-center","align-items-center");const t=document.createElement("p");return t.style.maxWidth="800px",t.classList.add(`text-${e.align}`,`text-wrap-${e.wrap}`,`text-${e.break}`,`fs-${e.size}`,`fw-${e.weight}`,`fs-${e.style}`,`lh-${e.lineHeight}`,`text-decoration-${e.decoration}`,`text-${e.transform}`),t.innerText=`This is a ${e.transform} text with a ${e.decoration} decoration, ${e.lineHeight} line height, ${e.weight} weight, ${e.size} size, ${e.break} break, ${e.wrap} wrap, and ${e.align} alignment.`,f.appendChild(t),f}};var g,x,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="text-start p-3">Start aligned text</p>
<p class="text-center p-3">Center aligned text</p>
<p class="text-end p-3">End aligned text</p>
\`;
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,v,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<div class="bg-primary text-wrap-normal text-center p-1 rounded" style="width: 6rem;">
  This text should wrap.
</div>
\`;
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,$,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<div class="bg-primary text-wrap-nowrap text-center p-1 rounded" style="width: 6rem;">
  This text should overflow the parent.
</div>
\`;
  }
}`,...(k=($=r.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var q,S,z;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="text-break-all p-3">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
\`;
  }
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var L,A,F;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="text-keep-all p-3">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
\`;
  }
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var H,O,C;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="text-lowercase p-3">Lowercased text.</p>
<p class="text-uppercase p-3">Uppercased text.</p>
<p class="text-capitalize p-3">CapiTaliZed text.</p>
\`;
  }
}`,...(C=(O=p.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var W,E,U;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="fs-1 p-3">.fs-1 text</p>
<p class="fs-2 p-3">.fs-2 text</p>
<p class="fs-3 p-3">.fs-3 text</p>
<p class="fs-4 p-3">.fs-4 text</p>
<p class="fs-5 p-3">.fs-5 text</p>
<p class="fs-6 p-3">.fs-6 text</p>
\`;
  }
}`,...(U=(E=o.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var j,B,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="fw-9 fs-3 p-3">.fw-9</p>
<p class="fw-8 fs-3 p-3">.fw-8</p>
<p class="fw-7 fs-3 p-3">.fw-7</p>
<p class="fw-6 fs-3 p-3">.fw-6</p>
<p class="fw-5 fs-3 p-3">.fw-5</p>
<p class="fw-4 fs-3 p-3">.fw-4</p>
<p class="fw-3 fs-3 p-3">.fw-3</p>
<p class="fw-2 fs-3 p-3">.fw-2</p>
<p class="fw-1 fs-3 p-3">.fw-1</p>
\`;
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var K,N,R;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="fs-normal fs-3 p-3">.fs-normal</p>
<p class="fs-italic fs-3 p-3">.fs-italic</p>
<p class="fs-oblique fs-3 p-3">.fs-oblique</p>
\`;
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var Z,_,G;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="lh-1 p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-sm p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-base p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
<p class="lh-lg p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio inventore fuga accusamus excepturi nostrum aliquam nisi quos, dignissimos ad magni voluptate unde impedit nemo quidem temporibus in. Amet, tenetur corporis.</p>
\`;
  }
}`,...(G=(_=c.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var I,J,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="text-decoration-underline p-3">This text has a line underneath it.</p>
<p class="text-decoration-overline p-3">This text has a line over it.</p>
<a href="#" class="text-decoration-none p-3">This link has its text decoration removed</a>
<p class="text-decoration-line-through p-3">This text has a line going through it.</p>
\`;
  }
}`,...(M=(J=d.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var P,Q,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  render: () => {
    return \`
<p class="text-secondary p-3">
  Secondary text with a <a href="#" class="text-reset">reset link</a>.
</p>
<p class="text-secondary p-3">
  Secondary text without a <a href="#">reset link</a>.
</p>
\`;
  }
}`,...(V=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    align: "start",
    wrap: "normal",
    break: "break-all",
    size: "3",
    weight: "3",
    style: "none",
    lineHeight: "base",
    decoration: "none",
    transform: "lowercase"
  },
  parameters: {
    layout: {
      type: "fullscreen"
    }
  },
  argTypes: {
    align: {
      control: {
        type: "select"
      },
      options: ["start", "center", "end"],
      description: "Text alignment"
    },
    wrap: {
      control: {
        type: "select"
      },
      options: ["normal", "nowrap", "wrap"],
      description: "Text wrapping behavior"
    },
    break: {
      control: {
        type: "select"
      },
      options: ["break-all", "keep-all"],
      description: "Text breaking behavior"
    },
    size: {
      control: {
        type: "select"
      },
      options: ["1", "2", "3", "4", "5", "6"],
      description: "Font size"
    },
    weight: {
      control: {
        type: "select"
      },
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description: "Font weight"
    },
    style: {
      control: {
        type: "select"
      },
      options: ["none", "normal", "italic", "oblique"],
      description: "Font style"
    },
    lineHeight: {
      control: {
        type: "select"
      },
      options: ["1", "sm", "base", "lg"],
      description: "Line height"
    },
    decoration: {
      control: {
        type: "select"
      },
      options: ["none", "underline", "overline", "line-through"],
      description: "Text decoration"
    },
    transform: {
      control: {
        type: "select"
      },
      options: ["lowercase", "uppercase", "capitalize"],
      description: "Text transformation"
    }
  },
  render: args => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("vh-100", "vw-100", "d-flex", "justify-content-center", "align-items-center");
    const text = document.createElement("p");
    text.style.maxWidth = "800px";
    text.classList.add(\`text-\${args.align}\`, \`text-wrap-\${args.wrap}\`, \`text-\${args.break}\`, \`fs-\${args.size}\`, \`fw-\${args.weight}\`, \`fs-\${args.style}\`, \`lh-\${args.lineHeight}\`, \`text-decoration-\${args.decoration}\`, \`text-\${args.transform}\`);
    text.innerText = \`This is a \${args.transform} text with a \${args.decoration} decoration, \${args.lineHeight} line height, \${args.weight} weight, \${args.size} size, \${args.break} break, \${args.wrap} wrap, and \${args.align} alignment.\`;
    wrapper.appendChild(text);
    return wrapper;
  }
}`,...(ee=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const ne=["Align","Wrap","NoWrap","Break","KeepAll","Transform","FontSize","FontWeight","FontStyle","LineHeight","TextDecoration","ResetColor","Text"];export{n as Align,a as Break,o as FontSize,l as FontStyle,i as FontWeight,m as KeepAll,c as LineHeight,r as NoWrap,u as ResetColor,h as Text,d as TextDecoration,p as Transform,s as Wrap,ne as __namedExportsOrder,te as default};
