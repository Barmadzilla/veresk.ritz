<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style scoped>
h1 {
  text-align: center;
  text-transform: uppercase;
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
</style>
