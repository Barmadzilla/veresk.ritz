<template>
  <header :class="{ short: short != undefined }">
    <MenuPoster />
    <MenuMain />
    <MenuOval />
  </header>
</template>

<script setup>
const props = defineProps(["short"]);
</script>

<style scoped>
header {
  background: white;
  height: 100vh;
  position: relative;
  transition: all 200ms;
}
header.short {
  height: 70vh;
}
</style>
