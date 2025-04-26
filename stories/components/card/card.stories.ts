import { Meta, StoryObj } from "@storybook/html";

type CardArgs = {
  maxWidth: number;
  withImage: boolean;
  variation: "yellow" | "green" | "blue" | "purple";
};

const meta: Meta<CardArgs> = {
  title: "Components/Card",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<CardArgs>;

export const PromoCardWithoutImage: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
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
`;
  },
};

export const PromoCardWithoutImage2: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
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
`;
  },
};

export const PromoCardWithImage: Story = {
  tags: ["!dev"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
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
`;
  },
};

export const Promo: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    withImage: true,
    maxWidth: 600,
    variation: "yellow",
  },
  argTypes: {
    variation: {
      control: "select",
      options: ["yellow", "green", "blue", "purple"],
    },
  },
  render: (args) => {
    return `
<div
  class="promo-card promo-card-${args.variation}"
  style="max-width: ${args.maxWidth}px; ${
      args.withImage
        ? `background-image: url('/stories/assets/${args.variation}-promo.svg')`
        : ""
    }"
>
  <h3 class="promo-card-title">ფრონტენდი</h3>
  <p class="promo-card-description">
    ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ შეხედოს. ისუთქავდა
    გარეგნობითაც აღვსოდა ლორემ იპსუმ გვეცვა ნეტარებებში წყალს მტკივნეული ერთ
    შეხედოს.
  </p>
  <a class="promo-card-cta" href="...">მეტის ნახვა</a>
</div>
`;
  },
};
