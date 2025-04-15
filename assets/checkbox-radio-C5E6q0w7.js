import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as t}from"./index-Bb44zobi.js";import{C as i}from"./index-D8npic4H.js";import{DefaultCheckboxs as a,DefaultDisabledCheckboxs as l,Checkbox as o,DefaultSwitchCheckbox as d,DefaultRadios as h,DefaultDisabledRadios as r,Radio as x}from"./checkbox.stories-B71T4Z5Y.js";import"./iframe-LBM_Owom.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function c(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"checkbox--radio",children:"Checkbox & Radio"}),`
`,e.jsxs(s.p,{children:[`The default appearance of checkboxes and radio buttons in browsers is enhanced using
`,e.jsx(s.code,{children:".form-check"}),` — a set of classes designed to improve the structure and functionality of these input elements.
This approach allows for better customization and consistent behavior across different browsers.
Checkboxes are used when multiple selections are allowed, while radio buttons let users choose only one option from a group.`]}),`
`,e.jsxs(s.p,{children:["In our structure, ",e.jsx(s.code,{children:"<input>"})," and ",e.jsx(s.code,{children:"<label>"})," elements are placed as siblings rather than nesting the ",e.jsx(s.code,{children:"<input>"})," inside the ",e.jsx(s.code,{children:"<label>"}),`.
While this approach requires explicitly setting id and for attributes to link them, it offers more flexibility.
We use the sibling selector `,e.jsx(s.code,{children:"~"})," to target various ",e.jsx(s.code,{children:"<input>"}),` states such as :checked and :disabled. Paired with the
`,e.jsx(s.code,{children:".form-check-label"})," class, this setup makes it simple to style the label text based on the state of the corresponding input."]}),`
`,e.jsx(s.h2,{id:"checks",children:"Checks"}),`
`,e.jsx(i,{of:a,className:"bg-main"}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.p,{children:["Add the ",e.jsx(s.code,{children:"disabled"})," attribute and the associated ",e.jsx(s.code,{children:"<label>"}),"s are automatically styled to match with a lighter color to help indicate the input's state."]}),`
`,e.jsx(i,{of:l,className:"bg-main"}),`
`,e.jsx(s.h3,{id:"validation",children:"Validation"}),`
`,e.jsx(s.p,{children:"By default checkboxes will get invalid style after submitting the form."}),`
`,e.jsx(i,{of:o,className:"bg-main"}),`
`,e.jsx(s.h2,{id:"switch",children:"Switch"}),`
`,e.jsxs(s.p,{children:[`Switch is same as checkbox but with different style. It is used to toggle between two states, such as on/off or yes/no.
To use switch, add the `,e.jsx(s.code,{children:'role="switch"'})]}),`
`,e.jsx(i,{of:d,className:"bg-main"}),`
`,e.jsx(s.h2,{id:"radio",children:"Radio"}),`
`,e.jsx(i,{of:h,className:"bg-main"}),`
`,e.jsx(s.h3,{id:"disabled-1",children:"Disabled"}),`
`,e.jsxs(s.p,{children:["Add the ",e.jsx(s.code,{children:"disabled"})," attribute and the associated ",e.jsx(s.code,{children:"<label>"}),"s are automatically styled to match with a lighter color to help indicate the input's state."]}),`
`,e.jsx(i,{of:r,className:"bg-main"}),`
`,e.jsx(s.h3,{id:"validation-1",children:"Validation"}),`
`,e.jsx(i,{of:x,className:"bg-main"}),`
`,e.jsx(s.h2,{id:"disable-validation",children:"Disable Validation"}),`
`,e.jsxs(s.p,{children:["To disable custom validation add ",e.jsx(s.code,{children:"data-no-validate"})," attribute to the checkbox or radio input."]}),`
`,e.jsx(s.p,{children:"For example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="checkbox" class="form-check-input" required data-no-validation />
`})}),`
`,e.jsx(s.h2,{id:"reverse-label",children:"Reverse label"}),`
`,e.jsxs(s.p,{children:["To reverse the label and checkbox/radio input, add ",e.jsx(s.code,{children:".form-reverse-input"})," class name to ",e.jsx(s.code,{children:".form-check"})," element."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="form-check form-reverse-input">
  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
  <label class="form-check-label" for="exampleCheck1">Check this checkbox</label>
</div>
`})}),`
`,e.jsx(s.h2,{id:"inline",children:"Inline"}),`
`,e.jsxs(s.p,{children:["To display checkboxes or radio buttons inline, add the ",e.jsx(s.code,{children:".form-check-inline"})," class to the ",e.jsx(s.code,{children:".form-check"}),` element.
This will ensure that the checkboxes or radio buttons are displayed in a single line, making them more compact and visually appealing.`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="form-check form-reverse-input">
  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
  <label class="form-check-label" for="exampleCheck1">Check this checkbox</label>
</div>
<div class="form-check form-check-inline">
  <input type="checkbox" class="form-check-input" id="exampleCheck2" />
  <label class="form-check-label" for="exampleCheck2">Check this checkbox 2</label>
</div>
`})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can use ",e.jsx(s.code,{children:".form-check-inline"})," class with ",e.jsx(s.code,{children:".form-reverse-input"})," class to display checkbox/radio input inline with reverse label."]}),`
`]})]})}function g(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(c,{...n})}):c(n)}export{g as default};
