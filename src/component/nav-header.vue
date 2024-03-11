<script setup lang="ts">
import router from '@/router'
import {useUserStore} from '@/store/user-store.ts'
import {onMounted, ref} from 'vue'
import basicRouter from '@/router/basic-router.ts'
import {useRoute} from 'vue-router'

const userStore = useUserStore()

const routerList = ref([])
const route = useRoute()

onMounted(() => {
  routerList.value = basicRouter.children
})

// Feat: Upd selected nav
const onMenuItemClick = (path: string) => {
  router.push({path: path})
}

const selectedKey = ref([route.path])

router.afterEach((to, from, failure) => {
  selectedKey.value = [to.path]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.isRequireAuth) {
    if (userStore.userRole != to.meta.userRole) {
      next('/')
      return
    }
  }
  next()
})
</script>

<template>
  <a-row align="center">
    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKey" @menu-item-click="onMenuItemClick">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '10px' }" disabled>
          <img src="/logo.png" class="logo" alt="">
        </a-menu-item>
        <a-menu-item v-for="(routerItem) in routerList" :key="routerItem.path">
          {{ routerItem.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      {{ userStore.userName }}
    </a-col>
  </a-row>
</template>

<style scoped lang="scss">
.logo {
  height: 20px;
  cursor: pointer;
  vertical-align: middle;
}
</style>