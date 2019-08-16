import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import MuseUI from 'muse-ui';
import moment from 'moment';
import 'muse-ui/dist/muse-ui.css';
import './assets/iconfont/iconfont.css';
// import './assets/iconfont/material-icons.css';
import axios from './http'
import 'muse-ui-message/dist/muse-ui-message.css';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import Toast from 'muse-ui-toast';


Vue.config.productionTip = false;
Vue.use(MuseUI);
Vue.use(VueSocketio, socketio('http://localhost:7001/'));
Vue.prototype.moment = moment;
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App),
  sockets: {
    connect: function () {
      console.log('连接成功');
    },
    res: function (val) {
      console.log('接收到服务端消息', val);
    }
  }
}).$mount("#app");

const ToastOption = {
  position: 'top', // 弹出的位置
  time: 2000, // 显示的时长
  closeIcon: 'close', // 关闭的图标
  close: false, // 是否显示关闭按钮
  successIcon: 'check_circle', // 成功信息图标
  infoIcon: 'info', // 信息信息图标
  warningIcon: 'priority_high', // 提醒信息图标
  errorIcon: 'warning' // 错误信息图标
}
Vue.use(Toast,ToastOption);