/*
 * @Descripttion : 
 * @Author       : wuhaidong
 * @Date         : 2024-03-11 21:01:06
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2024-03-11 21:19:59
 */
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');
