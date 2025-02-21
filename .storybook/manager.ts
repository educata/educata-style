import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Educata Styles Documentation",
    brandUrl: "https://educata.dev",
    brandImage: "/brand.png",
    brandTarget: "_self",
  }),
});
