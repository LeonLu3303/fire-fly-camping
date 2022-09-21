import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import Activity from '../views/ActivityView.vue';
import ReportView from '../views/ReportView.vue';
import ShoppingView from '../views/ShoppingView.vue';
import NewsView from '../views/NewsView.vue';
import ReportMessageView from '../views/ReportMessageView.vue';
import ShoppingDetails from '../views/ShoppingDetails.vue';
import ShoppingPayment from '../views/ShoppingPayment.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import ServiceView from '../views/ServiceView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import('../views/ActivityView.vue'),
  },
  {
    path: '/Member',
    name: 'Member',
    component: () => import('../views/MemberView.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/Booking',
    name: 'Booking',
    component: () => import('../views/bookingView.vue'),
  },
  {
    path: '/News',
    name: 'News',
    component:NewsView,
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../views/ShoppingView.vue'),
  },
  {
    path: '/Report',
    name: 'Report',
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
  {
    path: '/Service',
    name: 'Service',
    component: () => import('../views/ServiceView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
