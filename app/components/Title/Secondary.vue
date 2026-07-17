<template>
  <h2>
    {{ title }}
  </h2>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style scoped>
h2 {
  text-align: center;
  text-transform: uppercase;
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
</style>
