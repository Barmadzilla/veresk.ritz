<template>
  <h2 :class="{ left: left != undefined }">
    {{ title }}
  </h2>
</template>

<script setup>
const props = defineProps(["title", "left"]);
</script>

<style scoped>
h2 {
  text-align: center;
  text-transform: uppercase;
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
h2.left {
  text-align: left;
}
</style>
