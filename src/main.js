import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/rem100'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/common.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
