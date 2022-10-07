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
import LoadingPage from '../components/LoadingPage.vue';
import ServiceView from '../views/ServiceView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/HomeView',
    name: 'home',
    chtName: '首頁',
    component: HomeView,
  },
  {
    path: '/',
    name: 'LoadingPage',
    chtName: '初始畫面',
    component: LoadingPage,
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
    component:NewsView,
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
    component: ReportView,
  },
  {
    path: '/reportMessage',
    name: 'reportMessage',
    chtName: '營火報告訊息',
    component: ReportMessageView,
  },
  {
    path: '/ShoppingDetails',
    name: 'ShoppingDetails',
    chtName: '購物明細',
    component: ShoppingDetails,
  },
  {
    path: '/ShoppingPayment',
    name: 'ShoppingPayment',
    chtName: '支付方式',
    component: ShoppingPayment,
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    chtName: '購物車',
    component: ShoppingCart,
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
