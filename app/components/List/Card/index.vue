<template>
  <section class="list-card">
    <slot />
  </section>
</template>

<script setup></script>

<style scoped>
.list-card {
  display: flex;
  justify-content: start;
  text-align: left;
  gap: 8rem;
  margin-bottom: 8rem;
}
</style>
