import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as o}from"./index-Bb44zobi.js";import{C as r}from"./index-DqFkrojZ.js";import{Example as i,OverflowHidden as d,Vertical as c,HorizontalAndVertical as l,RowColumns as a,NoGutters as h}from"./gutters.stories-rqUIvUD5.js";import"./iframe-CIpGCKDd.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"gutters",children:"Gutters"}),`
`,e.jsx(n.p,{children:"Gutters are the padding between your columns, used to responsively space and align content in the Educata grid system."}),`
`,e.jsx(n.h2,{id:"how-they-work",children:"How they work"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Gutters are the gaps between column content, created by horizontal ",e.jsx(n.code,{children:"padding"}),"."]})," We set ",e.jsx(n.code,{children:"padding-right"})," and ",e.jsx(n.code,{children:"padding-left"})," on each column, and use negative ",e.jsx(n.code,{children:"margin"})," to offset that at the start and end of each row to align content."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Gutters start at ",e.jsx(n.code,{children:"1.5rem"})," (",e.jsx(n.code,{children:"24px"}),") wide"]}),". This allows us to match our grid to the padding and margin spacers scale."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gutters can be responsively adjusted."})," Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters."]}),`
`]}),`
`,e.jsx(r,{of:i}),`
`,e.jsxs(n.p,{children:["An alternative solution is to add a wrapper around the ",e.jsx(n.code,{children:".row"})," with the ",e.jsx(n.code,{children:".overflow-hidden"})," class:"]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"vertical-gutters",children:"Vertical gutters"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".gy-*"}),` classes can be used to control the vertical gutter widths within a row when columns wrap to new lines.
Like the horizontal gutters, the vertical gutters can cause some overflow below the `,e.jsx(n.code,{children:".row"}),` at the end of a page.
If this occurs, you add a wrapper around `,e.jsx(n.code,{children:".row"})," with the ",e.jsx(n.code,{children:".overflow-hidden"})," class:"]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"horizontal--vertical-gutters",children:"Horizontal & vertical gutters"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".g-*"}),` classes to control the horizontal and vertical grid gutters.
In the example below, we use a smaller gutter width, so there isn't a need for the `,e.jsx(n.code,{children:".overflow-hidden"})," wrapper class."]}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h2,{id:"row-columns-gutters",children:"Row columns gutters"}),`
`,e.jsx(n.p,{children:`Gutter classes can also be added to row columns.
In the following example, we use responsive row columns and responsive gutter classes.`}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"no-gutters",children:"No gutters"}),`
`,e.jsxs(n.p,{children:["The gutters between columns in our predefined grid classes can be removed with ",e.jsx(n.code,{children:".g-0"}),`.
This removes the negative margins from .row and the horizontal padding from all immediate children columns.`]}),`
`,e.jsxs(n.p,{children:["Need an edge-to-edge design? Drop the parent ",e.jsx(n.code,{children:".container"})," or ",e.jsx(n.code,{children:".container-fluid"})," and add ",e.jsx(n.code,{children:".mx-0"})," to the ",e.jsx(n.code,{children:".row"})," to prevent overflow."]}),`
`,e.jsx(n.p,{children:`In practice, here's how it looks.
Note that you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).`}),`
`,e.jsx(r,{of:h})]})}function f(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{f as default};
