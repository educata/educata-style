import { Meta, StoryObj } from "@storybook/html";

// @ts-ignore
import YellowPromo from "../../assets/yellow-promo.svg";
// @ts-ignore
import GreenPromo from "../../assets/green-promo.svg";
// @ts-ignore
import BluePromo from "../../assets/blue-promo.svg";
// @ts-ignore
import PurplePromo from "../../assets/purple-promo.svg";

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
  style="max-width: 600px; background-image: url('${YellowPromo}');"
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
  style="max-width: ${args.maxWidth}px; ${args.withImage ? getImage(args.variation) : ""}"
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

export const SimpleCard: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => {
    return `
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
`;
  },
};

function getImage(variation: string): string {
  switch (variation) {
    case "yellow":
      return `background-image: url('${YellowPromo}');`;
    case "green":
      return `background-image: url('${GreenPromo}');`;
    case "blue":
      return `background-image: url('${BluePromo}');`;
    case "purple":
      return `background-image: url('${PurplePromo}');`;
  }
}
