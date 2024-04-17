import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () =>
      import(
        /* webpackChunkName: "PokemonListPage" */ '@/modules/pokemon/pages/ListPage.vue'
      ),
  },
  {
    path: '/about',
    component: () =>
      import(
        /* webpackChunkName: "PokemonAboutPage" */ '@/modules/pokemon/pages/AboutPage.vue'
      ),
  },
  {
    path: '/:id',
    name: 'Pokemon Details',
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'
      ),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ '@/modules/shared/NotFound.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
