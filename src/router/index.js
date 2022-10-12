import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

import CarIndex from '@/Car/Index'
import CarEdit from '@/Car/EditCar'
import CarShow from '@/Car/ShowCar'
import CarCreate from '@/Car/CreateCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },

    {
      path: '/Car/create',
      name: 'Car-create',
      component: CarCreate
    },
    {
      path: '/Car/edit/:userId',
      name: 'Car-edit',
      component: CarEdit
    },
    {
      path: '/Car/:userId',
      name: 'Car',
      component: CarShow
    },
    {
      path: '/Cars',
      name: 'Cars',
      component: CarIndex
    },

  ]
})
