import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Activity from '../views/ActivityView.vue';
import ReportView from '../views/ReportView.vue';
import ShoppingView from '../views/ShoppingView.vue';
import NewsView from '../views/NewsView.vue';
import ReportMessageView from '../views/ReportMessageView.vue';
import ShoppingDetails from '../views/ShoppingDetails.vue';
import ShoppingPayment from '../views/ShoppingPayment.vue';
import ShoppingCart from '../views/ShoppingCart.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ActivityView.vue'),
  },
  {
    path: '/Member',
    name: 'Member',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MemberView.vue'),
  },
  {
    path: '/Booking',
    name: 'Booking',
    component: () => import('../views/bookingView.vue'),
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/NewsView.vue'),
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../views/ShoppingView.vue'),
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView,
  },
  {
    path: '/reportMessage',
    name: 'reportMessage',
    component: ReportMessageView,
  },
  {
    path: '/ShoppingDetails',
    name: 'ShoppingDetails',
    component: ShoppingDetails,
  },
  {
    path: '/ShoppingPayment',
    name: 'ShoppingPayment',
    component: ShoppingPayment,
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
