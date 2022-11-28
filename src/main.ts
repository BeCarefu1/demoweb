import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-4-grid/css/grid.min.css';
import Axios from "axios";

Vue.config.productionTip = false;

Axios.defaults.headers.common['ApiKey'] = 'b67cc32a73da8b8479fc5f752a3665544944a8dc';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
