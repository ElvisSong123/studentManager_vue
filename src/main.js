import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import { ajaxObj } from '@/ajax/axios';
Vue.config.productionTip = false
Vue.prototype.$ajax = ajaxObj;
new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')