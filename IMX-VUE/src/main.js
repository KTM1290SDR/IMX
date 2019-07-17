import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import MuseUI from 'muse-ui';
import moment from 'moment';
import 'muse-ui/dist/muse-ui.css';
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.use(MuseUI);
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   if (to.matched.some(m => m.meta.auth)) {
//     if (window.localStorage.isLogin === '1') {
//       next()
//       console.log("去主页")
//     } else if (to.path !== '/') {
//       next({path: '/Login'})
//       console.log("去登录页")
//     }
//   } else {
//     next()
//     console.log("去")
//   }
// })