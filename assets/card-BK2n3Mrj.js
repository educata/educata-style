import{j as r}from"./index-BdIgl1Fy.js";import{useMDXComponents as d}from"./index-Bb44zobi.js";import{C as i,M as n}from"./index-fukZuh4x.js";import{PromoCardWithoutImage as c,PromoCardWithoutImage2 as s,PromoCardWithImage as l,SimpleCard as t}from"./card.stories-D3mDmOnf.js";import"./iframe-DEf-nsc0.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...a.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"card",children:"Card"}),`
`,r.jsx(e.p,{children:"There is two card component."}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#promo-card",children:"Promo Card"})}),`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#simple-card",children:"Simple Card"})}),`
`]}),`
`,r.jsx(e.h2,{id:"promo-card",children:"Promo card"}),`
`,r.jsx(e.p,{children:"Promo card contains a title, description, and a cta. It has gradient color for background and border."}),`
`,r.jsx(i,{of:c,className:"bg-main"}),`
`,r.jsxs(e.p,{children:["Promo card base color could be change via ",r.jsx(e.code,{children:"promo-card-{{COLOR}}"}),"."]}),`
`,r.jsx(i,{of:s,className:"bg-main"}),`
`,r.jsx(e.p,{children:"Avaliable colors are:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"white"}),`
`,r.jsx(e.li,{children:"black"}),`
`,r.jsx(e.li,{children:"blue"}),`
`,r.jsx(e.li,{children:"red"}),`
`,r.jsx(e.li,{children:"green"}),`
`,r.jsx(e.li,{children:"purple"}),`
`,r.jsx(e.li,{children:"yellow"}),`
`]}),`
`,r.jsx(e.h3,{id:"with-image",children:"With image"}),`
`,r.jsx(e.p,{children:"Promo card could have an image. The image is on the right bottom side of the card."}),`
`,r.jsx(e.h3,{id:"classes",children:"Classes"}),`
`,r.jsx(n,{children:"\n| Class                       | Description                         |\n|-----------------------------|-------------------------------------|\n| `.promo-card`             | Base class for promo card wrapper   |\n| `.promo-card-title`       | Promo card title                    |\n| `.promo-card-description` | Promo card description              |\n| `.promo-card-cta`         | Promo card cta                      |\n"}),`
`,r.jsx(i,{of:l,className:"bg-main"}),`
`,r.jsx(e.h2,{id:"simple-card",children:"Simple card"}),`
`,r.jsx(e.p,{children:"Simple card is a simple card with a title, description, and a image."}),`
`,r.jsx(i,{of:t,className:"bg-main"}),`
`,r.jsx(e.h3,{id:"classes-1",children:"Classes"}),`
`,r.jsx(n,{children:"\n| Class                       |  Description                        |\n|-----------------------------|-------------------------------------|\n| `.card`                   |  Base class for card wrapper        |\n| `.card-image`             |  Card image                         |\n| `.card-body`              |  Card body wrapper                  |\n| `.card-title`             |  Card title                         |\n| `.card-text`              |  Card description                   |\n"})]})}function u(a={}){const{wrapper:e}={...d(),...a.components};return e?r.jsx(e,{...a,children:r.jsx(o,{...a})}):o(a)}export{u as default};
