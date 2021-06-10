import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

import './assets/styles/_main.scss';
import './plugins/sweetAlert';

Vue.config.productionTip = false;
Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:8000';


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

