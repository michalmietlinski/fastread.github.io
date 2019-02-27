import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speed: parseInt(sessionStorage.getItem('speed'), 10) || 250,

  },
  mutations: {
    SET_SPEED: (state, speed) => {
      state.speed = speed;
    },
  },
  actions: {
    setSpeed: ({ commit, state }, newValue) => {
      sessionStorage.setItem('speed', newValue);
      commit('SET_SPEED', newValue);
      return state.speed;
    },
  },
  getters: {
    getSpeed(state) {
      console.log('now');
      return state.speed;
    },
  },
});
