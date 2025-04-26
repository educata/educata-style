import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as i}from"./index-Bb44zobi.js";import{C as n}from"./index-fukZuh4x.js";import{DefaultForm as l,FormControlSizing as r,FormText as a,FormControlDisabled as c,FormControlReadonly as d,FormControlPlainText as h,FormControlFileInput as m,FormControlColorInput as x,FormControlDataList as p}from"./form-control.stories-BgNCuYLY.js";import"./iframe-DEf-nsc0.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(o){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"form-controls",children:"Form controls"}),`
`,e.jsxs(t.p,{children:["Educata's form controls are styled with class names. Be sure to use an appropriate ",e.jsx(t.code,{children:"type"}),` attribute on all inputs.
It can be used on `,e.jsx(t.code,{children:"input"})," and ",e.jsx(t.code,{children:"textarea"})," elements, which will give custom styles, sizing, focus states and more."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:l,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(t.p,{children:["Set heights using classes like ",e.jsx(t.code,{children:".form-control-lg"})," and ",e.jsx(t.code,{children:".form-control-sm"}),"."]}),`
`,e.jsx(n,{of:r,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"form-text",children:"Form text"}),`
`,e.jsxs(t.p,{children:["Block-level form text can be created using ",e.jsx(t.code,{children:".form-text"}),"."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Form text should be explicitly associated with the form control it relates to using the ",e.jsx(t.code,{children:"aria-describedby"})," attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Form text below inputs can be styled with ",e.jsx(t.code,{children:".form-text"}),". If a block-level element will be used, a top margin is added for easy spacing from the inputs above."]}),`
`,e.jsx(n,{of:a,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"disabled"})," boolean attribute on an input to give it a disabled style. The associated ",e.jsx(t.code,{children:"<label>"}),"s are automatically styled to match with a lighter color to help indicate the input's state."]}),`
`,e.jsx(n,{of:c,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"readonly",children:"Readonly"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"readonly"})," boolean attribute on an input to give it a readonly style. The associated ",e.jsx(t.code,{children:"<label>"}),"s are automatically styled to match with a lighter color to help indicate the input's state."]}),`
`,e.jsx(n,{of:d,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"readonly-plain-text",children:"Readonly plain text"}),`
`,e.jsxs(t.p,{children:["If you want to have ",e.jsx(t.code,{children:"<input readonly>"})," elements in your form styled as plain text, replace ",e.jsx(t.code,{children:".form-control"})," with ",e.jsx(t.code,{children:".form-control-plaintext"})," to remove the default form field styling and preserve the correct margin and padding."]}),`
`,e.jsx(n,{of:h,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"file-input",children:"File Input"}),`
`,e.jsx(n,{of:m,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"color",children:"Color"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:'type="color"'})," on input."]}),`
`,e.jsx(n,{of:x,className:"bg-main"}),`
`,e.jsx(t.h2,{id:"datalist",children:"Datalist"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.code,{children:"<datalist>"}),' element can be used to provide an "autocomplete" or "suggestion" list of options for an ',e.jsx(t.code,{children:"<input>"})," element. The ",e.jsx(t.code,{children:"<datalist>"})," is referenced by the ",e.jsx(t.code,{children:"list"})," attribute on the ",e.jsx(t.code,{children:"<input>"}),"."]}),`
`,e.jsx(n,{of:p,className:"bg-main"})]})}function w(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{w as default};
