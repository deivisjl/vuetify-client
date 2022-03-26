import Vue from 'vue'
import VueRouter from 'vue-router'

import MainRoutes from './app-routes/MainRoutes'
import LoginRoutes from './app-routes/LoginRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
  ...MainRoutes,
  ...LoginRoutes
  ]
})

export default router
