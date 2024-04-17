import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "PokemonListPage" */ "@/modules/pokemon/pages/ListPage.vue"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /* webpackChunkName: "PokemonAboutPage" */ "@/modules/pokemon/pages/AboutPage.vue"
      ),
  },
  {
    path: "/pokemon",
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "@/modules/shared/NotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
