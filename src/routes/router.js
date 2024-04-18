import { createWebHashHistory, createRouter } from 'vue-router';

const isAuthenticatedGuard = async (to, from, next) => {
  // console.log({ to, from, next })

  return new Promise(() => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log('está autenticado');
      next();
    } else {
      console.log('bloqueado por el isAuthenticatedGuard', random);
      next({ name: 'pokemon-home' });
    }
  });
};

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
    path: '/dragonball',
    name: 'dragonball',
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "DragonBallLayout" */ '@/modules/dragonball/layouts/DragonBallLayout.vue'
      ),
    children: [
      {
        path: 'characters',
        name: 'dragonball-characters',
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ '@/modules/dragonball/pages/Characters.vue'
          ),
      },
      {
        path: 'about',
        name: 'dragonball-about',
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ '@/modules/dragonball/pages/About.vue'
          ),
      },
      {
        path: '',
        redirect: { name: 'dragonball-characters' },
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
