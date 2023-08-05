import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import todo from "./todo.js";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["todo"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    todo: { namespaced: true, ...todo },
  },
});
