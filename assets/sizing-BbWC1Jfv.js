import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as t}from"./index-Bb44zobi.js";import{C as n}from"./index-BIWoHJfk.js";import{Width as s,Height as r}from"./sizing.stories-BgsxBE6r.js";import"./iframe-DIxpjqu4.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function d(h){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...h.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"sizing",children:"Sizing"}),`
`,e.jsx(i.p,{children:"Easily make an element as wide or as tall with our width and height utilities."}),`
`,e.jsx(i.h2,{id:"relative-to-the-parent",children:"Relative to the parent"}),`
`,e.jsxs(i.p,{children:[`The width and height utilities are relative to the parent element.
The default values are `,e.jsx(i.code,{children:"25%"}),", ",e.jsx(i.code,{children:"50%"}),", ",e.jsx(i.code,{children:"75%"}),", ",e.jsx(i.code,{children:"100%"}),", and ",e.jsx(i.code,{children:"auto"}),"."]}),`
`,e.jsx(n,{of:s}),`
`,e.jsxs(i.p,{children:["For height, the same applies. The default values are ",e.jsx(i.code,{children:"25%"}),", ",e.jsx(i.code,{children:"50%"}),", ",e.jsx(i.code,{children:"75%"}),", ",e.jsx(i.code,{children:"100%"}),", and ",e.jsx(i.code,{children:"auto"}),"."]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i.h3,{id:"max-width-and-max-height",children:"Max width and max height"}),`
`,e.jsxs(i.p,{children:[`The max width and max height utilities are relative to the parent element.
The default values are `,e.jsx(i.code,{children:"25%"}),", ",e.jsx(i.code,{children:"50%"}),", ",e.jsx(i.code,{children:"75%"}),", ",e.jsx(i.code,{children:"100%"}),", and ",e.jsx(i.code,{children:"auto"}),"."]}),`
`,e.jsxs(i.p,{children:["Formula uses the same values as width and height, but with ",e.jsx(i.code,{children:"max-"})," prefix."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`max-{{w | h}}-{{value}}
`})}),`
`,e.jsxs(i.p,{children:["Where ",e.jsx(i.code,{children:"w"})," is width and ",e.jsx(i.code,{children:"h"})," is height."]}),`
`,e.jsx(i.h2,{id:"relative-to-the-viewport",children:"Relative to the viewport"}),`
`,e.jsxs(i.p,{children:[`Everything is same as above, but the values are relative to the viewport.
The default values are `,e.jsx(i.code,{children:"25vw"}),", ",e.jsx(i.code,{children:"50vw"}),", ",e.jsx(i.code,{children:"75vw"}),", ",e.jsx(i.code,{children:"100vw"}),", and ",e.jsx(i.code,{children:"auto"}),`.
The formula uses the same values as width and height, but with `,e.jsx(i.code,{children:"vw"})," or ",e.jsx(i.code,{children:"vh"})," suffix."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`{{w | h}}-{{value}}-vw
`})}),`
`,e.jsxs(i.p,{children:["Where ",e.jsx(i.code,{children:"w"})," is width and ",e.jsx(i.code,{children:"h"})," is height."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
`})})]})}function m(h={}){const{wrapper:i}={...t(),...h.components};return i?e.jsx(i,{...h,children:e.jsx(d,{...h})}):d(h)}export{m as default};
