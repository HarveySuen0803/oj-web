import {RouteRecordRaw} from 'vue-router'

const basicRouter: RouteRecordRaw = {
  path: '/',
  redirect: '/home',
  component: () => import('@/layout/basic.vue'),
  children: [
    {
      name: 'Home',
      path: '/home',
      component: () => import('@/view/home.vue')
    },
    {
      name: 'About',
      path: '/about',
      component: () => import('@/view/about.vue')
    },
    {
      name: 'Admin',
      path: '/admin',
      component: () => import('@/view/admin.vue'),
      meta: {
        isRequireAuth: true,
        userRole: 'admin'
      }
    },
    {
      name: 'Question',
      path: '/question',
      component: () => import('@/view/question.vue'),
      meta: {
        isRequireAuth: true,
        userRole: 'admin'
      }
    },
    {
      name: 'QuestionAdd',
      path: '/question/add',
      component: () => import('@/view/question-add.vue'),
      meta: {
        isRequireAuth: true,
        userRole: 'admin'
      }
    }
  ]
}

export default basicRouter