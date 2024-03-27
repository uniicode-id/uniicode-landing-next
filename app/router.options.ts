import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () =>
        import("~/pages/home/index.vue").then((r) => r.default || r),
    },
  ],
};
