<template>
  <div class="picture">
    <img :src="data.src" />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
.picture {
  overflow: hidden;
  height: 52rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
