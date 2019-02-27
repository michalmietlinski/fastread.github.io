import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speed: parseInt(sessionStorage.getItem('speed'), 10) || 250,
    wordperline: parseInt(sessionStorage.getItem('wordperline'), 10) || 1,
    numberofrows: parseInt(sessionStorage.getItem('numberofrows'), 10) || 1,

  },
  mutations: {
    SET_SPEED: (state, speed) => {
      state.speed = speed;
    },
    SET_WORDPERLINE: (state, wordperline) => {
      state.wordperline = wordperline;
    },
    SET_NUMBEROFROWS: (state, numberofrows) => {
      state.numberofrows = numberofrows;
    },
  },
  actions: {
    setSpeed: ({ commit, state }, newValue) => {
      sessionStorage.setItem('speed', newValue);
      commit('SET_SPEED', newValue);
      return state.speed;
    },
    setWordperline: ({ commit, state }, newValue) => {
      sessionStorage.setItem('wordperline', newValue);
      commit('SET_WORDPERLINE', newValue);
      return state.wordperline;
    },
    setNumberofrows:  ({ commit, state }, newValue) => {
      sessionStorage.setItem('numberofrows', newValue);
      commit('SET_NUMBEROFROWS', newValue);
      return state.numberofrows;
    },
  },
  getters: {
    getSpeed(state) {
      return state.speed;
    },
    getWordperline(state) {
      return state.wordperline;
    },
    getNumberofrows(state) {
      return state.numberofrows;
    },
  },
});
