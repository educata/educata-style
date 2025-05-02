import{j as n}from"./index-BdIgl1Fy.js";import{useMDXComponents as t}from"./index-Bb44zobi.js";import{C as o}from"./index-DqFkrojZ.js";import{VerticalAligment as l,VerticalAligment2 as r,VerticalAligment3 as a,AlignSelf as c,Horizontal as h,ColumnWrapping as d,ColumnBreaks as m}from"./columns.stories-DWlUylqh.js";import"./iframe-CIpGCKDd.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"columns",children:"Columns"}),`
`,n.jsx(e.p,{children:`Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system.
Plus, see how to use column classes to manage widths of non-grid elements.`}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"First read the Grid page."}),`
`]}),`
`,n.jsx(e.h2,{id:"how-they-work",children:"How they work"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Columns build on the grid's flexbox architecture."})," Flexbox means we have options for changing individual columns and modifying groups of columns at the row level. You choose how columns grow, shrink, or otherwise change."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"When building grid layouts, all content goes in columns."})," The hierarchy of Educatas's grid goes from container to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Educatas'includes predefined classes for creating fast, responsive layouts."})," With six breakpoints and a dozen columns at each grid tier, we have dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish."]}),`
`]}),`
`,n.jsx(e.h2,{id:"alignment",children:"Alignment"}),`
`,n.jsx(e.p,{children:"Use flexbox alignment utilities to vertically and horizontally align columns."}),`
`,n.jsx(e.h3,{id:"vertical-alignment",children:"Vertical alignment"}),`
`,n.jsxs(e.p,{children:["Change the vertical alignment with any of the responsive ",n.jsx(e.code,{children:"align-items-*"})," classes."]}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(o,{of:a}),`
`,n.jsxs(e.p,{children:["Or, change the alignment of each column individually with any of the responsive ",n.jsx(e.code,{children:".align-self-*"})," classes."]}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h3,{id:"horizontal-alignment",children:"Horizontal alignment"}),`
`,n.jsxs(e.p,{children:["Change the horizontal alignment with any of the responsive ",n.jsx(e.code,{children:"justify-content-*"})," classes."]}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.h3,{id:"column-wrapping",children:"Column wrapping"}),`
`,n.jsx(e.p,{children:"If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line."}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(e.h3,{id:"column-breaks",children:"Column breaks"}),`
`,n.jsxs(e.p,{children:["Breaking columns to a new line in flexbox requires a small hack: add an element with ",n.jsx(e.code,{children:"width: 100%"}),` wherever you want to wrap your columns to a new line.
Normally this is accomplished with multiple `,n.jsx(e.code,{children:".rows"}),", but not every implementation method can account for this."]}),`
`,n.jsx(o,{of:m})]})}function y(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{y as default};
