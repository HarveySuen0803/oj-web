<script setup lang="ts">
</script>

<template>
  <a-layout style="height: 400px;">
    <!--<a-layout-header class="header">-->
    <!--</a-layout-header>-->
    <a-layout-content class="content">
      <RouterView></RouterView>
    </a-layout-content>
    <!--<a-layout-footer class="footer">Footer</a-layout-footer>-->
  </a-layout>
</template>

<style scoped lang="scss">
.footer {
  padding: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>