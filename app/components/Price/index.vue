<template>
  <div :class="['price', { large: large != undefined }]">
    <small v-if="from != undefined">от</small>
    {{ value }}
    <small v-if="curr == undefined">руб</small>
    <small v-if="curr">{{ curr }}</small>
  </div>
</template>

<script setup>
const props = defineProps(["value", "from", "curr", "large"]);
</script>

<style scoped>
.price {
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 500;
}
.price.large {
  font-size: 2.5rem;
}
.price small {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0.2rem;
  color: black;
}
.price small:first-child {
  margin-left: 0;
}
</style>
