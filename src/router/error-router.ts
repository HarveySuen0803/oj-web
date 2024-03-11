import {RouteRecordRaw} from 'vue-router'

const errorRouter: RouteRecordRaw = {
  path: '/error',
  name: 'Error',
  component: () => import('@/layout/error.vue'),
  children: [
    {
      name: 'Forbidden',
      path: '/error/forbidden',
      component: () => import('@/view/forbidden.vue')
    }
  ]
}

export default errorRouter
