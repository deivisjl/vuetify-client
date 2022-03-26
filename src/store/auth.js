'use strict'
import { APP_NAME } from '../config/app'

let tokenName = APP_NAME + '-token'
let token = JSON.parse(localStorage.getItem(tokenName))
token = token?.access_token

export default {
  namespaced: true,

  state: {
    isAuthenticated: token ? true : false,
    menu:[],
    permissions:[]
  },

  actions: {
    UPDATE_AUTHENTICATED_STATE({commit}, status){
        commit('SET_AUTH_STATE', status)
    },
    UPDATE_MENU_LIST({commit}, list) {
        commit('SET_MENU_LIST', list)
    },
    UPDATE_PERMISSIONS_LIST({commit}, list) {
      commit('SET_PERMISSIONS_LIST', list)
    },
    LOGOUT({commit}) {
      commit('SET_AUTH_STATE',false)
      commit('SET_MENU_LIST',[])
      commit('SET_PERMISSIONS_LIST',[])
    }
  },

  mutations: {
    SET_AUTH_STATE (state, status) {
      state.isAuthenticated = status
    },
    SET_MENU_LIST (state, list) {
      state.menu = list
    },
    SET_PERMISSIONS_LIST (state, list) {
      state.permissions = list
    },
  },

  getters: {
    isAuthenticated: state => state.isAuthenticated,
    menu: state => state.menu,
    permissions: state => state.permissions
  }
}
