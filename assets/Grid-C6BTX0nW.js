import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as t}from"./index-Bb44zobi.js";import{C as n}from"./index-DqFkrojZ.js";import{Example as l,EqualWidth as r,OneColumnWidth as a,VariableWidth as c,AllBreakpoints as d,StackedHorizontal as h,MixAndMatch as u,RowColumns1 as x,RowColumns2 as m,RowColumns3 as p,RowColumns4 as j,RowColumns5 as f,RowColumns6 as g,Nesting as w}from"./grid.stories-DS_Rtq0s.js";import"./iframe-CIpGCKDd.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(o){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(s.p,{children:`Use our powerful mobile-first flexbox grid to build layouts of all
shapes and sizes thanks to a twelve column system, six default responsive tiers, and dozens of predefined classes.`}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsxs(s.p,{children:[`Educata's grid system uses a series of containers, rows, and columns to layout and align content.
It's built with `,e.jsx(s.code,{children:"flexbox"})," and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsxs(s.p,{children:[`The above example creates three equal-width columns across all devices and viewports using our predefined grid classes.
Those columns are centered in the page with the parent `,e.jsx(s.code,{children:".container"}),"."]}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.p,{children:"Breaking it down, here's how the grid system comes together:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Our grid supports six responsive breakpoints."}),` Breakpoints are based on min-width media queries, meaning they affect that breakpoint
and all those above it (e.g., `,e.jsx(s.code,{children:".col-sm-4"})," applies to ",e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"md"}),", ",e.jsx(s.code,{children:"lg"}),", ",e.jsx(s.code,{children:"xl"}),", and ",e.jsx(s.code,{children:"xxl"}),`).
This means you can control container and column sizing and behavior by each breakpoint.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Containers center and horizontally pad your content."})," Use ",e.jsx(s.code,{children:".container"})," for a responsive pixel width, ",e.jsx(s.code,{children:".container-fluid"})," for ",e.jsx(s.code,{children:"width: 100%"}),` across
all viewports and devices, or a responsive container (e.g., `,e.jsx(s.code,{children:".container-md"}),") for a combination of fluid and pixel widths."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Rows are wrappers for columns."})," Each column has horizontal ",e.jsx(s.code,{children:"padding"}),` (called a gutter) for controlling the space between them.
This `,e.jsx(s.code,{children:"padding"}),` is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side.
Rows also support modifier classes to uniformly apply column sizing and gutter classes to change the spacing of your content.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Columns are incredibly flexible."})," There are ",e.jsx(s.strong,{children:"12"}),` template columns available per row, allowing you to create different combinations of elements that span any number of columns.
Column classes indicate the number of template columns to span (e.g., `,e.jsx(s.code,{children:"col-4"})," spans four). widths are set in percentages so you always have the same relative sizing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Gutters are also responsive and customizable."}),` Gutter classes are available across all breakpoints, with all the same sizes as our margin and padding spacing.
Change horizontal gutters with `,e.jsx(s.code,{children:".gx-*"})," classes, vertical gutters with ",e.jsx(s.code,{children:".gy-*"}),", or all gutters with ",e.jsx(s.code,{children:".g-*"})," classes. ",e.jsx(s.code,{children:".g-0"})," is also available to remove gutters."]}),`
`]}),`
`,e.jsx(s.h2,{id:"grid-options",children:"Grid options"}),`
`,e.jsx(s.p,{children:"Educata's grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follows:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Extra small (xs)"}),`
`,e.jsx(s.li,{children:"Small (sm)"}),`
`,e.jsx(s.li,{children:"Medium (md)"}),`
`,e.jsx(s.li,{children:"Large (lg)"}),`
`,e.jsx(s.li,{children:"Extra large (xl)"}),`
`,e.jsx(s.li,{children:"Extra extra large (xxl)"}),`
`]}),`
`,e.jsx(s.h2,{id:"auto-layout-columns",children:"Auto-layout columns"}),`
`,e.jsxs(s.p,{children:["Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like ",e.jsx(s.code,{children:".col-sm-6"}),"."]}),`
`,e.jsx(s.h2,{id:"equal-width",children:"Equal-width"}),`
`,e.jsxs(s.p,{children:["For example, here are two grid layouts that apply to every device and viewport, from ",e.jsx(s.code,{children:"xs"})," to ",e.jsx(s.code,{children:"xxl"}),`.
Add any number of unit-less classes for each breakpoint you need and every column will be the same width.`]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(s.h2,{id:"setting-one-column-width",children:"Setting one column width"}),`
`,e.jsx(s.p,{children:`Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.
You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.`}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(s.h2,{id:"variable-width-content",children:"Variable width content"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:".col-{breakpoint}-auto"})," classes to size columns based on the natural width of their content."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h2,{id:"responsive-classes",children:"Responsive classes"}),`
`,e.jsx(s.p,{children:`Educata's grid includes six tiers of predefined classes for building complex responsive layouts.
Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.`}),`
`,e.jsx(s.h2,{id:"all-breakpoints",children:"All breakpoints"}),`
`,e.jsxs(s.p,{children:["For grids that are the same from the smallest of devices to the largest, use the ",e.jsx(s.code,{children:".col"})," and ",e.jsx(s.code,{children:".col-*"}),` classes.
Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `,e.jsx(s.code,{children:".col"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(s.h2,{id:"stacked-to-horizontal",children:"Stacked to horizontal"}),`
`,e.jsxs(s.p,{children:["Using a single set of ",e.jsx(s.code,{children:".col-sm-*"})," classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (",e.jsx(s.code,{children:"sm"}),")."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h2,{id:"mix-and-match",children:"Mix and match"}),`
`,e.jsx(s.p,{children:`Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed.
See the example below for a better idea of how it all works.`}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h2,{id:"row-columns",children:"Row columns"}),`
`,e.jsxs(s.p,{children:["Use the responsive ",e.jsx(s.code,{children:".row-cols-*"}),` classes to quickly set the number of columns that best render your content and layout.
Whereas normal `,e.jsx(s.code,{children:".col-*"})," classes apply to the individual columns (e.g., ",e.jsx(s.code,{children:".col-md-4"}),`),
the row columns classes are set on the parent `,e.jsx(s.code,{children:".row"})," as a shortcut. With ",e.jsx(s.code,{children:".row-cols-auto"})," you can give the columns their natural width."]}),`
`,e.jsx(s.p,{children:"Use these row columns classes to quickly create basic grid layouts or to control your card layouts."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(s.h2,{id:"nesting",children:"Nesting"}),`
`,e.jsxs(s.p,{children:["To nest your content with the default grid, add a new ",e.jsx(s.code,{children:".row"})," and set of ",e.jsx(s.code,{children:".col-sm-*"})," columns within an existing ",e.jsx(s.code,{children:".col-sm-*"}),` column.
Nested rows should include a set of columns that add up to `,e.jsx(s.strong,{children:"12"})," or fewer (it is not required that you use all 12 available columns)."]}),`
`,e.jsx(n,{of:w})]})}function R(o={}){const{wrapper:s}={...t(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{R as default};
