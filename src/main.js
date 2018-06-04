import Vue from 'vue'
import App from './App.vue';
import VueRouter from "vue-router";
import { routes } from "./routes.js"
import { EventBus } from "./event-bus.js"


Vue.prototype.$ebus = EventBus;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
})



const urlAxiosBuild = "http://51.15.224.76:8000"
const urlAxiosDev = "http://localhost:8000"

new Vue({
  el: '#app',
router,
  render: h => h(App)
})
