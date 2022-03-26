import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'

import authStore from './auth'

Vue.use(Vuex)

const state = {
  services
}
const mutations = {
}
const actions = {
}

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  modules: {
    auth: authStore
  }
})
