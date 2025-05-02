import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as t}from"./index-Bb44zobi.js";import{M as s}from"./index-DqFkrojZ.js";import"./iframe-CIpGCKDd.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"containers",children:"Containers"}),`
`,e.jsx(n.p,{children:"Containers are a fundamental building block of Educata that contain, pad, and align your content within a given device or viewport."}),`
`,e.jsx(n.h2,{id:"how-they-work",children:"How they work"}),`
`,e.jsxs(n.p,{children:["Containers are the most basic layout element in Educata and are ",e.jsx(n.strong,{children:"required when using our default grid system"}),`.
Containers are used to contain, pad, and (sometimes) center the content within them.
While containers can be nested, most layouts do not require a nested container.`]}),`
`,e.jsx(n.p,{children:"Educata comes with three different containers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".container"}),", which sets a ",e.jsx(n.code,{children:"max-width"})," at each responsive breakpoint."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".container-{breakpoint}"}),", which is ",e.jsx(n.code,{children:"width: 100%"})," until the specified breakpoint."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".container-fluid"}),", which is ",e.jsx(n.code,{children:"width: 100%"})," at all breakpoints."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The table below illustrates how each container's ",e.jsx(n.code,{children:"max-width"})," compares to the original ",e.jsx(n.code,{children:".container"})," and ",e.jsx(n.code,{children:".container-fluid"})," across each breakpoint."]}),`
`,e.jsx(s,{children:"\n|                      | Extra Small <br /> <576px | Small <br /> >=576px | Medium <br /> >=768px | Large <br /> >=992px | X-Large <br /> >=1200 | XX-Large <br /> >=1400px |\n| ------------------   | ------------------------- | -------------------- | --------------------- | -------------------- | --------------------- | ------------------------ |\n| `.container`       | 100%                      | 540px                | 720px                 | 960px                | 1140px                | 1320px                   |\n| `.container-sm`    | 100%                      | 540px                | 720px                 | 960px                | 1140px                | 1320px                   |\n| `.container-md`    | 100%                      | 100%                 | 720px                 | 960px                | 1140px                | 1320px                   |\n| `.container-lg`    | 100%                      | 100%                 | 100%                  | 960px                | 1140px                | 1320px                   |\n| `.container-xl`    | 100%                      | 100%                 | 100%                  | 100%                 | 1140px                | 1320px                   |\n| `.container-xxl`   | 100%                      | 100%                 | 100%                  | 100%                 | 100%                  | 1320px                   |\n| `.container-fluid` | 100%                      | 100%                 | 100%                  | 100%                 | 100%                  | 100%                     |\n"}),`
`,e.jsx(n.h2,{id:"default-container",children:"Default container"}),`
`,e.jsxs(n.p,{children:["Our default ",e.jsx(n.code,{children:".container"})," class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container">
  <!-- Content here -->
</div>
`})}),`
`,e.jsx(n.h2,{id:"responsive-containers",children:"Responsive containers"}),`
`,e.jsxs(n.p,{children:["Responsive containers allow you to specify a class that is ",e.jsx(n.code,{children:"100%"})," wide until the specified breakpoint is reached, after which we apply ",e.jsx(n.code,{children:"max-widths"}),` for each of the higher breakpoints.
For example, `,e.jsx(n.code,{children:".container-sm"})," is 100% wide to start until the sm breakpoint is reached, where it will scale up with ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"}),", ",e.jsx(n.code,{children:"xl"}),", and ",e.jsx(n.code,{children:"xxl"}),"."]}),`
`,e.jsx(n.h2,{id:"fluid-containers",children:"Fluid containers"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".container-fluid"})," for a full width container, spanning the entire width of the viewport."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container-fluid">
  ...
</div>
`})})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{x as default};
