import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as r}from"./index-Bb44zobi.js";import{C as i}from"./index-D8npic4H.js";import{CenteredDiv as c}from"./centered-div.stories-CQqjmt0C.js";import{Gap as o}from"./gap.stories-Hl_XlOpU.js";import{RowGap as l}from"./row-gap.stories-DjIo3ns1.js";import{ColumnGap as a}from"./column-gap.stories-D2scWGjF.js";import"./iframe-LBM_Owom.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function d(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"spacing",children:"Spacing"}),`
`,e.jsx(n.p,{children:`Educata-Style provides a set of spacing utilities that can be used to add margin and padding to elements.
There are many shorthand utilities for quickly adding margin, padding or gap to an element.`}),`
`,e.jsx(n.h2,{id:"margin-and-spacing",children:"Margin and Spacing"}),`
`,e.jsxs(n.p,{children:["Apply responsive-friendly ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"}),` to an element or specific sides using shorthand classes.
These classes offer flexibility for individual, global, as well as vertical and horizontal spacing adjustments.
Built using a default Sass map, they provide spacing options from `,e.jsx(n.code,{children:".25rem"})," to ",e.jsx(n.code,{children:"3rem"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Using the CSS Grid layout module? Consider using the ",e.jsx(n.a,{href:"#gap",children:"gap utilities"})," for grid gap spacing."]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Spacing can be used inside any breakpoint."}),`
`,e.jsx(n.p,{children:"The class names are based on the following pattern:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.{property}{sides}-{size}
`})}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"{property}"})," is one of:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"m"})," - for classes that set ",e.jsx(n.code,{children:"margin"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"p"})," - for classes that set ",e.jsx(n.code,{children:"padding"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"{sides}"})," is one of:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"t"})," - for classes that set ",e.jsx(n.code,{children:"margin-top"})," or ",e.jsx(n.code,{children:"padding-top"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"b"})," - for classes that set ",e.jsx(n.code,{children:"margin-bottom"})," or ",e.jsx(n.code,{children:"padding-bottom"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"e"})," - for classes that set both ",e.jsx(n.code,{children:"*-left"})," and ",e.jsx(n.code,{children:"*-right"})]}),`
`,e.jsxs(n.li,{children:["blank - for classes that set a ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"})," on all 4 sides of the element"]}),`
`,e.jsxs(n.li,{children:["auto - for classes that set ",e.jsx(n.code,{children:"margin"})," to ",e.jsx(n.code,{children:"auto"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"{size}"})," is one of:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"})," - for classes that eliminate the ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"})," by setting it to ",e.jsx(n.code,{children:"0"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1"})," - for classes that set the ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"})," to ",e.jsx(n.code,{children:".25rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"2"})," - for classes that set the ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"})," to ",e.jsx(n.code,{children:".5rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"3"})," - for classes that set the ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"})," to ",e.jsx(n.code,{children:"1rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"4"})," - for classes that set the ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"})," to ",e.jsx(n.code,{children:"1.5rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"5"})," - for classes that set the ",e.jsx(n.code,{children:"margin"})," or ",e.jsx(n.code,{children:"padding"})," to ",e.jsx(n.code,{children:"3rem"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.mt-0 {
  margin-top: 0;
}

.p-3 {
  padding: 1rem;
}

.pe-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.m-auto {
  margin: auto;
}
`})}),`
`,e.jsx(n.h3,{id:"horizontal-centering",children:"Horizontal centering"}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(n.code,{children:".m-auto"})," class to center an element horizontally."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"gap",children:"Gap"}),`
`,e.jsxs(n.p,{children:["When using ",e.jsx(n.code,{children:"display: flex"})," or ",e.jsx(n.code,{children:"display: grid"}),", you can use the ",e.jsx(n.code,{children:"gap"}),` utilities to add spacing between elements.
This utility is available for both `,e.jsx(n.code,{children:"row"})," and ",e.jsx(n.code,{children:"column"})," directions. Gap utilities are responsive."]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"row-gap",children:"row-gap"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"row-gap"})," sets the gap between rows in a container."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"column-gap",children:"column-gap"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"column-gap"})," sets the gap between columns in a container."]}),`
`,e.jsx(i,{of:a})]})}function y(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{y as default};
