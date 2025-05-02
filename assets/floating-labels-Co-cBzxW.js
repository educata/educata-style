import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as l}from"./index-Bb44zobi.js";import{C as s}from"./index-DqFkrojZ.js";import{DefaultExample as o,DefinedValue as i,Textarea as r,TextareaWithValue as c,Select as d,Disabled as h,InputGroups as x,Layout as m}from"./floating-labels.stories-DNBQcaeP.js";import"./iframe-CIpGCKDd.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"form-labels",children:"Form labels"}),`
`,e.jsx(n.p,{children:"Create beautifully simple form labels that float over your input fields."}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsxs(n.p,{children:["Wrap a pair of ",e.jsx(n.code,{children:'<input class="form-control">'})," and ",e.jsx(n.code,{children:"<label>"})," elements in ",e.jsx(n.code,{children:".form-floating"}),` to enable floating labels with Educatas textual form fields.
A placeholder is required on each `,e.jsx(n.code,{children:"<input>"})," as our method of CSS-only floating labels uses the ",e.jsx(n.code,{children:":placeholder-shown"}),` pseudo-element.
Also note that the `,e.jsx(n.code,{children:"<input>"})," must come first so we can utilize a sibling selector (e.g., ",e.jsx(n.code,{children:"~"}),")."]}),`
`,e.jsx(s,{of:o,className:"bg-main"}),`
`,e.jsxs(n.p,{children:["When there's a value already defined, ",e.jsx(n.code,{children:"<label>"}),"s will automatically adjust to their floated position."]}),`
`,e.jsx(s,{of:i,className:"bg-main"}),`
`,e.jsx(n.h2,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.code,{children:"<textarea"}),">s with .form-control will be the same height as ",e.jsx(n.code,{children:"<input>"}),"s."]}),`
`,e.jsx(s,{of:r,className:"bg-main"}),`
`,e.jsxs(n.p,{children:["To set a custom height on your ",e.jsx(n.code,{children:"<textarea>"}),", do not use the rows attribute. Instead, set an explicit height (either inline or via custom CSS)."]}),`
`,e.jsx(s,{of:c,className:"bg-main"}),`
`,e.jsx(n.h2,{id:"selects",children:"Selects"}),`
`,e.jsxs(n.p,{children:["Other than ",e.jsx(n.code,{children:".form-control"}),", floating labels are only available on ",e.jsx(n.code,{children:".form-selects"}),`.
They work in the same way, but unlike `,e.jsx(n.code,{children:"<input>"}),"s, they'll always show the ",e.jsx(n.code,{children:"<label>"}),` in its floated state.
`,e.jsx(n.strong,{children:"Selects with"})," ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"size"})})," and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"multiple"})})," are not supported."]}),`
`,e.jsx(s,{of:d,className:"bg-main"}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"disabled"})," boolean attribute on an input, a textarea or a select to give it a grayed out appearance, remove pointer events, and prevent focusing."]}),`
`,e.jsx(s,{of:h,className:"bg-main"}),`
`,e.jsx(n.h2,{id:"input-groups",children:"Input groups"}),`
`,e.jsxs(n.p,{children:["Floating labels also support ",e.jsx(n.code,{children:".input-group"}),"."]}),`
`,e.jsx(s,{of:x,className:"bg-main"}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsx(n.p,{children:"When working with the Educata grid system, be sure to place form elements within column classes."}),`
`,e.jsx(s,{of:m,className:"bg-main"})]})}function w(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{w as default};
