import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as r}from"./index-Bb44zobi.js";import{C as i}from"./index-BIWoHJfk.js";import{Display as t,DisplayInline as l,DirectionRow as c,DirectionColumn as d,JustifyContent as x,AlignItems as h,AlignSelf as a,AlignContent as f,Wrap as j,Fill as m,Grow as p,Shrink as u,Order as g}from"./flex.stories-FNAgiWhd.js";import"./iframe-DIxpjqu4.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"flex",children:"flex"}),`
`,e.jsx(n.p,{children:`Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.
For more complex implementations, custom CSS may be necessary.`}),`
`,e.jsx(n.h2,{id:"enable-flex-behaviors",children:"Enable flex behaviors"}),`
`,e.jsxs(n.p,{children:["Apply ",e.jsx(n.code,{children:"display"}),` utilities to create a flexbox container and transform direct children elements into flex items.
Flex containers and items are able to be modified further with additional flex properties.`]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"direction",children:"Direction"}),`
`,e.jsxs(n.p,{children:[`Set the direction of flex items in a flex container with direction utilities.
In most cases you can omit the horizontal class here as the browser default is `,e.jsx(n.code,{children:"row"}),"."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".flex-row"}),` to set a horizontal direction (the browser default),
or `,e.jsx(n.code,{children:".flex-row-reverse"})," to start the horizontal direction from the opposite side."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".flex-column"})," to set a vertical direction, or ",e.jsx(n.code,{children:".flex-column-reverse"})," to start the vertical direction from the opposite side."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"justify-content",children:"Justify content"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"justify-content"})," utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if ",e.jsx(n.code,{children:"flex-direction: column"}),`).
Choose from `,e.jsx(n.code,{children:"flex-start"})," (browser default), ",e.jsx(n.code,{children:"flex-end"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"between"}),", ",e.jsx(n.code,{children:"around"}),", or ",e.jsx(n.code,{children:"evenly"}),"."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"align-items",children:"Align items"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"align-items"})," utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if ",e.jsx(n.code,{children:"flex-direction: column"}),`).
Choose from `,e.jsx(n.code,{children:"stretch"})," (browser default), ",e.jsx(n.code,{children:"flex-start"}),", ",e.jsx(n.code,{children:"flex-end"}),", ",e.jsx(n.code,{children:"center"}),", or ",e.jsx(n.code,{children:"baseline"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"align-self",children:"Align self"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"align-self"})," utilities on flexbox items to change the alignment of a single flex item on the cross axis (the y-axis to start, x-axis if ",e.jsx(n.code,{children:"flex-direction: column"}),`).
Choose from `,e.jsx(n.code,{children:"auto"})," (browser default), ",e.jsx(n.code,{children:"flex-start"}),", ",e.jsx(n.code,{children:"flex-end"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"baseline"}),", or ",e.jsx(n.code,{children:"stretch"}),"."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h2,{id:"align-content",children:"Align content"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"align-content"}),` utilities on flexbox containers to align flex items together on the cross axis.
Choose from `,e.jsx(n.code,{children:"flex-start"})," (browser default), ",e.jsx(n.code,{children:"flex-end"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"between"}),", ",e.jsx(n.code,{children:"around"}),", or ",e.jsx(n.code,{children:"stretch"}),`. To demonstrate these utilities,
we've enforced `,e.jsx(n.code,{children:"flex-wrap: wrap"})," and increased the number of flex items."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h2,{id:"wrap",children:"Wrap"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"flex-wrap"}),` utilities on flexbox containers to change the wrapping behavior of flex items.
Choose from `,e.jsx(n.code,{children:"nowrap"})," (browser default), ",e.jsx(n.code,{children:"wrap"}),", or ",e.jsx(n.code,{children:"wrap-reverse"}),"."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"fill",children:"Fill"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"flex-fill"}),` utilities to make a flex item fill the available space in a flex container.
This is a shorthand for `,e.jsx(n.code,{children:"flex-grow: 1; flex-shrink: 1;"})," and ",e.jsx(n.code,{children:"width: 100%"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"grow-and-shrink",children:"Grow and Shrink"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"flex-grow"})," and ",e.jsx(n.code,{children:"flex-shrink"}),` utilities to control the ability of flex items to grow or shrink to fill the space in a flex container.
Use `,e.jsx(n.code,{children:"flex-grow"}),` to control the ability of a flex item to grow to fill the space in a flex container.
Choose from `,e.jsx(n.code,{children:"0"})," (browser default) or ",e.jsx(n.code,{children:"1"}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"flex-shrink"}),` to control the ability of a flex item to shrink to fit the space in a flex container.
Choose from `,e.jsx(n.code,{children:"0"})," (browser default) or ",e.jsx(n.code,{children:"1"}),"."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"order",children:"Order"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"order"}),` utilities to change the visual order of flex items.
Choose from `,e.jsx(n.code,{children:"0"})," (browser default), ",e.jsx(n.code,{children:"1"}),", ",e.jsx(n.code,{children:"2"}),", ",e.jsx(n.code,{children:"3"}),", ",e.jsx(n.code,{children:"4"})," or ",e.jsx(n.code,{children:"5"}),"."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"gap",children:"Gap"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"gap"}),` utilities to set the gap between flex items.
Read more about the `,e.jsx(n.code,{children:"gap"})," property in the spacing documentation."]})]})}function D(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{D as default};
