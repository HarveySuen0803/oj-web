<script setup lang="ts">
import {RouterView} from 'vue-router'
import NavHeader from '@/component/nav-header.vue'

</script>

<template>
  <a-layout style="height: 400px;">
    <a-layout-header class="header">
      <nav-header></nav-header>
    </a-layout-header>
    <a-layout-content class="content">
      <RouterView></RouterView>
    </a-layout-content>
    <!--<a-layout-footer class="footer">Footer</a-layout-footer>-->
  </a-layout>
</template>

<style scoped lang="scss">
//.footer {
//  text-align: center;
//}
</style>