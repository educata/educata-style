import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as a}from"./index-Bb44zobi.js";function s(l){const n={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:["To display modal overlays, use the ",e.jsx(n.code,{children:".modal"}),` class.
The structure inside it should be the same for every modal.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <span class="modal-title">Header name</span>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <!-- any content -->
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:["By default, the modal will not be visible, as it uses ",e.jsx(n.code,{children:"opacity: 0"}),` for animation.
To make it visible, add the `,e.jsx(n.code,{children:".show"})," class."]}),`
`,e.jsxs(n.p,{children:[`On mobile devices, the modal will default to a drawer-style layout.
To make it full-screen, add the `,e.jsx(n.code,{children:".modal-mobile-fullscreen"})," class."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="modal modal-mobile-fullscreen">
  <div class="modal-content">
    <div class="modal-header">
      <span class="modal-title">Header name</span>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <!-- any content -->
    </div>
  </div>
</div>
`})})]})}function t(l={}){const{wrapper:n}={...a(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}export{t as default};
