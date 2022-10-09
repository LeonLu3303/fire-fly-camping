import { createApp } from 'vue';
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import Paginate from 'vuejs-paginate';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import "@/assets/scss/style.scss";

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(DatePicker)
app.use(store)
app.use(Paginate)
//app.component('組件名稱', import的參數名)
app.component('MainHeader',MainHeader)
app.component('MainFooter',MainFooter)
app.mount('#app')