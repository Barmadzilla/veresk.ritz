<template>
  <h3>
    {{ title }}
  </h3>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style scoped>
h3 {
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
</style>
