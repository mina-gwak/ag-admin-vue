import Vue from "vue";
import router from "@/main";
import { VueAuthenticate } from "vue-authenticate";
import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from 'src/util/cookies';

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: '/api',
  tokenName: "access_token",
  loginUrl: "/login",
  registerUrl: "/register"
});

export default {
  state: {
    token: getAuthFromCookie() || '',
    userIdx: getUserFromCookie() || '',
  },

  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },

  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    },
    setUserIdx(state, username) {
      state.username = username;
    },
    clearUserIdx(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },

  actions: {
    login({ commit }, payload) {
      return vueAuth.login(payload.user, payload.requestOptions).then(response => {
        console.log(response);
        commit('setToken', response.data.result.jwtToken);
        commit('setUserIdx', response.data.result.idx);
        saveAuthToCookie(response.data.result.jwtToken);
        saveUserToCookie(response.data.result.idx);
        commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
        router.push({path: "/"});
      });
    },

    register(context, payload) {
      return vueAuth.register(payload.user, payload.requestOptions).then(response => {
        context.commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
        router.push({path: "/"});
      });
    },

    logout(context, payload) {
      return vueAuth.logout().then(response => {
        context.commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
        router.push({name: "Login"});
      });
    }
  }
};
