import { defineConfig } from "vocs";

export default defineConfig({
  theme: {
    accentColor: "#D9D9D9",
  },
  baseUrl: "https://docs.variance.space",
  font: {
    google: "Inter",
  },
  iconUrl: {
    light: "/dark.svg",
    dark: "/light.svg",
  },
  logoUrl: {
    light: "/light.svg",
    dark: "/dark.svg",
  },
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  title: "Variance",
  description: "Variance Documentation",
  socials: [
    {
      icon: "github",
      link: "https://github.com/vaariance",
    },
    {
      icon: "x",
      link: "https://twitter.com/vaariance",
    },
  ],
  sidebar: [
    {
      text: "Overview",
      link: "/overview",
    },
    {
      text: "Account Abstraction",
      link: "/account-abstraction",
    },
    {
      text: "Paymasters",
      link: "/paymasters",
    },
    {
      text: "Getting Started",
      link: "/getting-started",
    },
  ],
});
