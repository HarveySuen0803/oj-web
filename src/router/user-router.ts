import {RouteRecordRaw} from 'vue-router'

const userRouter: RouteRecordRaw = {
  path: '/user',
  name: 'UserLayout',
  component: () => import('@/layout/user.vue'),
  children: [
    {
      name: 'UserLogin',
      path: '/user/login',
      component: () => import('@/view/user-signin.vue')
    },
    {
      name: 'UserRegister',
      path: '/user/register',
      component: () => import('@/view/user-signup.vue')
    }
  ]
}

export default userRouter