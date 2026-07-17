<template>
  <NuxtLink :to="data.link" class="item">
    <img :src="data.src" />
    <h4>{{ data.title }}</h4>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
img {
  width: 4.4rem;
}
.item {
  display: inline-block;
  text-decoration: none;
  color: #666;
  positon: relative;
}
.item * {
  transition: all 200ms;
}

img {
  position: relative;
  bottom: 0;
}
.item:hover img {
  bottom: 1rem;
}

.item:hover h4 {
  color: var(--color-primary);
}
h4 {
  font-size: 1.7rem;
  font-weight: 500;
  margin-top: 1rem;
}
</style>
