import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as s}from"./index-Bb44zobi.js";import{C as n}from"./index-OPW9XFND.js";import{Radius as l}from"./borders.stories-BHCJTyI4.js";import"./iframe-CekNVhDQ.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./variations-ITiYtS3r.js";function i(d){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"border",children:"Border"}),`
`,e.jsx(r.p,{children:"For border styles, we use the following variables:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Width"}),`
`,e.jsx(r.li,{children:"Style"}),`
`,e.jsx(r.li,{children:"Color"}),`
`,e.jsx(r.li,{children:"Radius"}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"Radius-{{ SIZE }}"})}),`
`]}),`
`,e.jsx(r.h2,{id:"static",children:"Static"}),`
`,e.jsx(r.p,{children:"There are four static border styles available:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Width - ",e.jsx(r.code,{children:"--ec-border-width"})," = ",e.jsx(r.code,{children:"1px"})]}),`
`,e.jsxs(r.li,{children:["Style - ",e.jsx(r.code,{children:"--ec-border-style"})," = ",e.jsx(r.code,{children:"solid"})]}),`
`,e.jsxs(r.li,{children:["Color - ",e.jsx(r.code,{children:"--ec-border-color"})," = ",e.jsx(r.code,{children:"#ededee"})]}),`
`,e.jsxs(r.li,{children:["Radius - ",e.jsx(r.code,{children:"--ec-border-radius"})," = ",e.jsx(r.code,{children:"0.375rem"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"radius",children:"Radius"}),`
`,e.jsx(r.p,{children:`While we have radius as static value, we also have a set of radius variables
that can be used to create different border radius styles. The following variables are available:`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`--ec-border-radius-{{SIZE}}
`})}),`
`,e.jsxs(r.p,{children:["Where ",e.jsx(r.code,{children:"{{SIZE}}"})," can be one of the following:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"sm"})," = ",e.jsx(r.code,{children:"0.25rem"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"lg"})," = ",e.jsx(r.code,{children:"0.5rem"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"xl"})," = ",e.jsx(r.code,{children:"1rem"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"xxl"})," = ",e.jsx(r.code,{children:"2rem"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"pill"})," = ",e.jsx(r.code,{children:"50rem"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"circle"})," = ",e.jsx(r.code,{children:"50%"})]}),`
`]}),`
`,e.jsx(r.p,{children:"There are also classes available for each of the radius sizes:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".rounded"})," - ",e.jsx(r.code,{children:"--ec-border-radius"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".rounded-sm"})," - ",e.jsx(r.code,{children:"--ec-border-radius-sm"})]}),`
`,e.jsx(r.li,{children:"..."}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:".rounded-circle"})," - ",e.jsx(r.code,{children:"--ec-border-radius-circle"})]}),`
`]}),`
`,e.jsx(n,{of:l})]})}function m(d={}){const{wrapper:r}={...s(),...d.components};return r?e.jsx(r,{...d,children:e.jsx(i,{...d})}):i(d)}export{m as default};
