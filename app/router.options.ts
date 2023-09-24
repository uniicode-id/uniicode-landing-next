import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () =>
        import("~/pages/landing-page/index.vue").then((r) => r.default || r),
    },
  ],
};
