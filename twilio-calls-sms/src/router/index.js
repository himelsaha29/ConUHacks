import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LoginPage from '@/components/LoginPage'
import SignUpPage from '@/components/SignUpPage'
import FunctionPage from '@/components/FunctionPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpPage
    },

    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },

    {
      path: '/sendtext',
      name: 'FunctionPage',
      component: FunctionPage
    }
  ]
})
