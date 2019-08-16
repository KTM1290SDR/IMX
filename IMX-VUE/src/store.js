import Vue from "vue";
import Vuex from "vuex";
import jwtDecode from "jwt-decode";

Vue.use(Vuex);

const key = 'userInfo'
const isLogin = 'isLogin'


export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: '0'
  },
  getters: {
    getUserInfo (state) {
      if (!state.userInfo) {
        state.userInfo = jwtDecode(localStorage.getItem(key)) 
      }
      return state.userInfo
    }
  },
  mutations: {
    $_setLogin(state, value) {
      state.isLogin = value
      localStorage.setItem(isLogin, value)
    },
    $_setStorage(state, value) {
      state.userInfo = value
      localStorage.setItem(key, JSON.stringify(value))
    },
    $_removeStorage(state) {
      state.userInfo = null
      localStorage.removeItem(key)
    }
  },
  actions: {}
});