import{j as e}from"./index-BdIgl1Fy.js";import{useMDXComponents as a}from"./index-Bb44zobi.js";import{M as d}from"./index-DqFkrojZ.js";import"./iframe-CIpGCKDd.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Educata."}),`
`,e.jsx(n.h2,{id:"core-concepts",children:"Core concepts"}),`
`,e.jsxs(n.p,{children:["= ",e.jsx(n.strong,{children:"Breakpoints are the building blocks of responsive design."})," Use them to control when your layout can be adapted at a particular viewport or device size."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use media queries to architect your CSS by breakpoint."})," Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use min-width in our media queries."]}),`
`]}),`
`,e.jsx(n.h2,{id:"available-breakpoints",children:"Available breakpoints"}),`
`,e.jsx(n.p,{children:"Educata includes six default breakpoints, sometimes referred to as grid tiers, for building responsively. These breakpoints can be customized if you're using our source Sass files."}),`
`,e.jsx(d,{children:"\n| Breakpoint        | Class infix | Dimensions |\n| ----------------- | ----------- | ---------- |\n| Extra small       | None        | <576px     |\n| Small             | `sm`      | ≥576px     |\n| Medium            | `md`      | ≥768px     |\n| Large             | `lg`      | ≥992px     |\n| Extra large       | `xl`      | ≥1200px    |\n| Extra extra large | `xxl`     | ≥1400px    |\n"}),`
`,e.jsx(n.p,{children:`Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12.
Breakpoints are also representative of a subset of common device sizes and viewport dimensions—they don't specifically target every use case or device.
Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.`}),`
`,e.jsx(n.h2,{id:"media-queries",children:"Media queries"}),`
`,e.jsx(n.p,{children:"These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes."}),`
`,e.jsx(n.h3,{id:"min-width",children:"Min-width"}),`
`,e.jsx(n.p,{children:"Educata primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Source mixins

// No media query necessary for xs breakpoint as it's effectively \`@media (min-width: 0) { ... }\`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at \`min-width: 0\`, and then show at the \`sm\` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
`})}),`
`,e.jsx(n.p,{children:"These Sass mixins translate in our compiled CSS using the values declared in our Sass variables. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// X-Small devices (portrait phones, less than 576px)
// No media query for \`xs\` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
`})}),`
`,e.jsx(n.h3,{id:"max-width",children:"Max-width"}),`
`,e.jsx(n.p,{children:"We occasionally use media queries that go in the other direction (the given screen size or smaller):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// No media query necessary for xs breakpoint as it's effectively \`@media (max-width: 0) { ... }\`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
`})}),`
`,e.jsxs(n.p,{children:["These mixins take those declared breakpoints, subtract ",e.jsx(n.code,{children:".02px"})," from them, and use them as our ",e.jsx(n.code,{children:"max-width"})," values. For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// \`xs\` returns only a ruleset and no media query
// ... { ... }

// \`sm\` applies to x-small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// \`md\` applies to small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// \`lg\` applies to medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// \`xl\` applies to large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// \`xxl\` applies to x-large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { ... }
`})}),`
`,e.jsx(n.h2,{id:"single-breakpoint",children:"Single breakpoint"}),`
`,e.jsx(n.p,{children:"There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
`})}),`
`,e.jsxs(n.p,{children:["For example the ",e.jsx(n.code,{children:"@include media-breakpoint-only(md) { ... }"})," will result in:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@media (min-width: 768px) and (max-width: 991.98px) { ... }
`})}),`
`,e.jsx(n.h2,{id:"between-breakpoints",children:"Between breakpoints"}),`
`,e.jsx(n.p,{children:"Similarly, media queries may span multiple breakpoint widths:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@include media-breakpoint-between(md, xl) { ... }
`})}),`
`,e.jsx(n.p,{children:"Which results in:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
`})})]})}function m(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
