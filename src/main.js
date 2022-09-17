import { createApp } from 'vue';
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App).use(DatePicker).use(store).use(router).mount('#app');
