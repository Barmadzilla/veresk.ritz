<template>
  <div class="container">
    <div class="gradient" />
    <ClientOnly>
      <img :src="poster" />
    </ClientOnly>
  </div>
</template>

<script setup>
const route = useRoute();
const poster = setPoster();
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
