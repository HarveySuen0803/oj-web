<script setup lang="ts">
import {ref} from 'vue'
import router from '@/router'
import {useUserStore} from '@/store/user-store.ts'
import api from '@/utils/api.ts'

const userStore = useUserStore()

const signinForm: any = ref({
  userAccount: '',
  userPassword: ''
})

const onSigninFormSubmit = async () => {
  try {
    const rep: any = await api.post('/user/signin', signinForm.value)
    userStore.id = rep.id
    userStore.userName = rep.userName
    userStore.userRole = rep.userRole
    userStore.userAvatar = rep.userAvatar
    userStore.userProfile = rep.userProfile
    userStore.createTime = rep.createTime
    userStore.updateTime = rep.updateTime
    await router.push('/home')
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="signinForm"
      @submit="onSigninFormSubmit"
  >
    <a-form-item field="userAccount" label="Account">
      <a-input v-model="signinForm.userAccount" placeholder="Please input account"/>
    </a-form-item>
    <a-form-item field="userPassword" tooltip="Password should not less than 2 digits" label="Password">
      <a-input-password v-model="signinForm.userPassword" placeholder="Please input password"/>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" style="width: 120px">Sign in</a-button>
    </a-form-item>
  </a-form>
</template>