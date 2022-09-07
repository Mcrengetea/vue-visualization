<template>
  <Layout />
</template>

<script setup lang="ts">
import Layout from './layout/Layout.vue';
</script>

<style lang="scss">
html,
body,
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url('/image/bg.jpg') no-repeat;
  background-size: 100% 100%;
}

.sub-pop {
  background: transparent!important;
  backdrop-filter: blur(10px);
}
</style>
