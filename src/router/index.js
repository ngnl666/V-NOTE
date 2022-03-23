import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/compositions/store';

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
    beforeEnter: (to, from) => {
      if (!store.state.userInfo) {
        store.setAlertMsg('error', '請先登入後即可造訪！');
        router.push({ name: 'login' });
        return false;
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
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
    beforeEnter: (to, from) => {
      if (from.name === 'explore') {
        localStorage.setItem('isShowNextPage', false);
      }
      if (from.name === 'all' || from.name === 'Home') {
        localStorage.setItem('isShowNextPage', true);
      }
    },
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
