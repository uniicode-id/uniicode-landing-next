// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    { path: "~/components/landing-page/decoration", pathPrefix: false },
    { path: "~/components/landing-page/section", pathPrefix: false },
    "~/components",
  ],

  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {},
});
