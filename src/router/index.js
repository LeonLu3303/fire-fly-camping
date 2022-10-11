import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    chtName: '首頁',
    component: HomeView,
  },
  {
    path: '/Activity',
    name: 'Activity',
    chtName: '營區導覽',
    component: () => import('../views/ActivityView.vue'),
  },
  {
    path: '/Member',
    name: 'Member',
    chtName: '會員中心',
    component: () => import('../views/MemberView.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    chtName: '登入註冊',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/Booking',
    name: 'Booking',
    chtName: '營區預訂',
    component: () => import('../views/bookingView.vue'),
  },
  {
    path: '/News',
    name: 'News',
    chtName: '最新消息',
    component: () => import('../views/NewsView.vue'),
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    chtName: '營火商城',
    component: () => import('../views/ShoppingView.vue'),
  },
  {
    path: '/Report',
    name: 'Report',
    chtName: '營火報告',
    component: () => import('../views/ReportView.vue'),
  },
  {
    path: '/ReportMessage',
    name: 'ReportMessage',
    chtName: '營火報告訊息',
    component: () => import('../views/ReportMessageView.vue'),
  },
  {
    path: '/ShoppingDetails',
    name: 'ShoppingDetails',
    chtName: '購物明細',
    component: () => import('../views/ShoppingDetails.vue'),
  },
  {
    path: '/ShoppingPayment',
    name: 'ShoppingPayment',
    chtName: '支付方式',
    component: () => import('../views/ShoppingPayment.vue'),
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    chtName: '購物車',
    component: () => import('../views/ShoppingCart.vue'),
  },
  {
    path: '/Service',
    name: 'Service',
    chtName: '營區服務',
    component: () => import('../views/ServiceView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
