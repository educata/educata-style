const w={title:"Components/Card",parameters:{backgrounds:{default:"dark"}}},a={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div
  class="promo-card"
  style="max-width: 600px;"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
`},e={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div
  class="promo-card promo-card-green"
  style="max-width: 600px"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
`},s={tags:["!dev"],parameters:{backgrounds:{default:"dark"}},render:()=>`
<div
  class="promo-card"
  style="max-width: 600px; background-image: url('/stories/assets/yellow-promo.svg')"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
`},o={parameters:{backgrounds:{default:"dark"}},args:{withImage:!0,maxWidth:600,variation:"yellow"},argTypes:{variation:{control:"select",options:["yellow","green","blue","purple"]}},render:r=>`
<div
  class="promo-card promo-card-${r.variation}"
  style="max-width: ${r.maxWidth}px; ${r.withImage?`background-image: url('/stories/assets/${r.variation}-promo.svg')`:""}"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
`},n={parameters:{backgrounds:{default:"dark"}},render:()=>`
<div class="card" style="max-width: 300px">
  <img
    class="card-image"
    src="https://thumbs.dreamstime.com/b/lines-code-software-several-colors-developer-programming-black-screen-abstract-modern-virtual-computer-script-web-259579244.jpg"
    alt="random image"
  />
  <div class="card-body">
    <h3 class="card-title">ჯავასკრიპტის საწყისები</h3>
    <p class="card-text">
      ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეუ ერთ შეხედოს. ისუთქავდა
      გარეგნობითაც
    </p>
    <div class="d-flex gap-3">
      <div class="chip">JS</div>
      <div class="chip chip-secondary">TS</div>
    </div>
  </div>
</div>
`};var d,t,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div
  class="promo-card"
  style="max-width: 600px;"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
\`;
  }
}`,...(c=(t=a.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,p,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div
  class="promo-card promo-card-green"
  style="max-width: 600px"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
\`;
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div
  class="promo-card"
  style="max-width: 600px; background-image: url('/stories/assets/yellow-promo.svg')"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
\`;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,v,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  args: {
    withImage: true,
    maxWidth: 600,
    variation: "yellow"
  },
  argTypes: {
    variation: {
      control: "select",
      options: ["yellow", "green", "blue", "purple"]
    }
  },
  render: args => {
    return \`
<div
  class="promo-card promo-card-\${args.variation}"
  style="max-width: \${args.maxWidth}px; \${args.withImage ? \`background-image: url('/stories/assets/\${args.variation}-promo.svg')\` : ""}"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
\`;
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,k,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render: () => {
    return \`
<div class="card" style="max-width: 300px">
  <img
    class="card-image"
    src="https://thumbs.dreamstime.com/b/lines-code-software-several-colors-developer-programming-black-screen-abstract-modern-virtual-computer-script-web-259579244.jpg"
    alt="random image"
  />
  <div class="card-body">
    <h3 class="card-title">ჯავასკრიპტის საწყისები</h3>
    <p class="card-text">
      ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეუ ერთ შეხედოს. ისუთქავდა
      გარეგნობითაც
    </p>
    <div class="d-flex gap-3">
      <div class="chip">JS</div>
      <div class="chip chip-secondary">TS</div>
    </div>
  </div>
</div>
\`;
  }
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const y=["PromoCardWithoutImage","PromoCardWithoutImage2","PromoCardWithImage","Promo","SimpleCard"];export{o as Promo,s as PromoCardWithImage,a as PromoCardWithoutImage,e as PromoCardWithoutImage2,n as SimpleCard,y as __namedExportsOrder,w as default};
