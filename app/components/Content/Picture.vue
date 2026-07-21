<template>
  <div class="container">
    <img :src="src[0]" />
  </div>
</template>

<script setup>
const props = defineProps(["src"]);
</script>

<style scoped>
.container {
  overflow: hidden;
  position: relative;
  width: 50%;

  flex-shrink: 0;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
