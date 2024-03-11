import {createRouter, createWebHistory} from 'vue-router'
import basicRouter from '@/router/basic-router.ts'
import userRouter from '@/router/user-router.ts'
import errorRouter from '@/router/error-router.ts'

export default createRouter({
  history: createWebHistory(),
  routes: [
    basicRouter,
    userRouter,
    errorRouter,
  ]
})