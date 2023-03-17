import { RouteRecordRaw } from 'vue-router';
import TheDefaultLayout from '../layouts/TheDefaultLayout.vue';
import TheDashboardLayout from '../layouts/TheDashboardLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { layout: TheDefaultLayout },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { layout: TheDefaultLayout },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { layout: TheDashboardLayout },
  },
];

export default routes;
