import {defineStore} from 'pinia'
import {User} from '@/api'

export const useUserStore = defineStore('user', {
  state: (): User => ({
    id: null,
    userName: '',
    userRole: 'admin',
    userAvatar: '',
    userProfile: '',
    createTime: '',
    updateTime: ''
  })
})