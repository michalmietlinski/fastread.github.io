import Vue from 'vue';
import Vuex from 'vuex';
import Copy from './assets/copy';
import Styles from './assets/styles';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speed: parseInt(sessionStorage.getItem('speed'), 10) || 250,
    wordperline: parseInt(sessionStorage.getItem('wordperline'), 10) || 1,
    numberofrows: parseInt(sessionStorage.getItem('numberofrows'), 10) || 1,
    language: sessionStorage.getItem('language') || 'English',
    availableLanguages: ['English', 'Polski'],
    copy: Copy[sessionStorage.getItem('language') || 'English'],
    availableThemes: ['light', 'dark'],
    theme: sessionStorage.getItem('theme') || 'light',
    styles: sessionStorage.getItem('theme') ? Styles[sessionStorage.getItem('theme')] : Styles.light,
    texttoread: sessionStorage.getItem('texttoread') || 'Text to use',
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
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      state.copy = Copy[language];
    },
    SET_THEME: (state, theme) => {
      state.theme = theme;
      state.styles = Styles[theme];
    },
    SET_TEXT: (state, text) => {
      state.texttoread = text;
    },

  },
  actions: {
    setText: ({ commit, state }, newValue) => {
      sessionStorage.setItem('texttoread', newValue);
      commit('SET_TEXT', newValue);
      return state.texttoread;
    },
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
    setNumberofrows: ({ commit, state }, newValue) => {
      sessionStorage.setItem('numberofrows', newValue);
      commit('SET_NUMBEROFROWS', newValue);
      return state.numberofrows;
    },
    setLanguage: ({ commit, state }, newValue) => {
      if (state.availableLanguages.includes(newValue)) {
        sessionStorage.setItem('language', newValue);
        commit('SET_LANGUAGE', newValue);
      }
      return state.language;
    },
    setTheme: ({ commit, state }, newValue) => {
      if (state.availableThemes.includes(newValue)) {
        sessionStorage.setItem('theme', newValue);
        commit('SET_THEME', newValue);
      }
      return state.language;
    },
  },
  getters: {
    getSpeed(state) {
      return state.speed;
    },
    getText(state) {
      return state.texttoread;
    },
    getWordperline(state) {
      return state.wordperline;
    },
    getNumberofrows(state) {
      return state.numberofrows;
    },
    getFaq(state) {
      return state.copy.faq.map(el => Object.assign(el, { opened: false }));
    },
  },
});
