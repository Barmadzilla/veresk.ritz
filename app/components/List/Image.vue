<template>
  <div class="container"><img :src="src[0]" /></div>
</template>

<script setup>
const props = defineProps(["src"]);
</script>

<style scoped>
.container {
  width: 43rem;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 100%;
  object-fit: cover;
}
</style>
