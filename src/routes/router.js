import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/pokemon',
  },

  {
    path: '/pokemon',
    name: 'pokemon',
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layout/PokemonLayout.vue'
      ),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage.vue'
          ),
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage.vue'
          ),
      },
      {
        path: ':id',
        name: 'pokemon-id',
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue'
          ),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
    ],
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
