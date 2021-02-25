import Vue from 'vue'
import App from './App.vue'
global.jQuery = jQuery;
import jQuery from "jquery";
import "bootstrap";
import store from "./store";


Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
