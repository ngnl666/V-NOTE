import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('@/views/AllNote.vue'),
  },
  {
    path: '/save',
    name: 'save',
    component: () => import('@/views/Save.vue'),
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('@/views/Explore.vue'),
  },
  {
    path: '/current',
    name: 'current',
    component: () => import('@/views/CurrentNote.vue'),
    children: [
      {
        path: 'view/:id',
        component: () => import('@/components/View.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
