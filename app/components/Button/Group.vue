<template>
  <div class="group">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  margin-bottom: 5rem;
}
</style>
