<template>
  <div class="container">
    <NuxtLink to="/">Главная</NuxtLink>
    <span class="separator">/</span>
    <NuxtLink
      v-if="route.meta?.parent"
      v-for="parent in route.meta.parent"
      :to="parent.slug"
      >{{ parent.title }}</NuxtLink
    >
    <span v-if="route.meta?.parent" class="separator">/</span>
    <span class="current">{{ current }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["current"]);
const route = useRoute();

const current = route.meta?.title ? route.meta.title : props.current;
</script>

<style scoped>
.container {
  margin-bottom: 5rem;
}
a,
span {
  font-size: 1.6rem;
}
a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 400;
  transition: all 200;
}
a:hover {
  font-weight: 500;
}
span {
  color: black;
}
.separator {
  color: #afafaf;
  padding: 0 0.5rem;
}
</style>
