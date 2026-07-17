<template>
  <p>{{ subtitle }}</p>
  <h4>{{ title }}</h4>
</template>

<script setup>
const props = defineProps(["title", "subtitle"]);
</script>

<style scoped>
p {
  font-size: 1.4rem;
  color: var(--color-primary);
}
h4 {
  color: var(--color-primary);
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
