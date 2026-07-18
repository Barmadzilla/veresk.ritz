<template>
  <div class="container">
    <div class="gradient" />
    <img :src="poster" />
  </div>
</template>

<script setup>
const route = useRoute();
const poster = ref(
  route.meta?.poster ? route.meta.poster : "/images/posters/hotel.jpg",
);
// console.log(route.meta);
watch(
  route,
  (newRoute) => {
    if (newRoute.meta?.poster) {
      poster.value = newRoute.meta.poster;
    } else {
      poster.value = "/images/posters/hotel.jpg";
    }
  },
  // { deep: true, immediate: true },
);
</script>

<style scoped>
.container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
}
.gradient {
  z-index: 10;
  height: 100%;
  width: 100%;
  background: linear-gradient(black, transparent);
  opacity: 0.43;
  position: absolute;
  top: 0;
  left: 0;
}
picture {
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
