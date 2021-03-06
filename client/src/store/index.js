import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      locale: 'ru-RU',
      modalOpened: false,
      ddMenuOpened: false,
      alertShown: false,
      page: 0
    }
  },
  mutations: {
    changeLocale(state, payload) {
      return (state.info.locale = payload)
    },
    toggleModal(state, payload) {
      return (state.info.modalOpened = payload)
    },
    toggleAlert(state, payload) {
      return (state.info.alertShown = payload)
    },
    toggleMenu(state, payload) {
      return (state.info.ddMenuOpened = payload)
    },
    changePage(state, payload) {
      return (state.info.page = payload)
    }
  },
  actions: {},
  getters: {
    appInfo(state) {
      return state.info
    },
    appLocale(state) {
      return state.info.locale
    },
    modalOpened(state) {
      return state.info.modalOpened
    },
    alertShown(state) {
      return state.info.alertShown
    },
    ddMenuOpened(state) {
      return state.info.ddMenuOpened
    },
    appPage(state) {
      return state.info.page
    }
  },
  modules: {}
})
