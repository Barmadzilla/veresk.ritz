<template>
  <div class="marker">
    <img v-if="src" alt="" :src="`/markers/${src}`" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps(["src", "title"]);
</script>
<style scoped>
.marker {
  --h: 6rem;
  background: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  height: var(--h);
  width: var(--h);
  font-size: 0.7em;
  font-weight: normal;
  border-radius: 5rem 5rem 5rem 0;
  box-sizing: border-box;
  padding: 1rem;
  top: calc(var(--h) * -1);
  position: relative;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.35rem solid white;
  transition: all 200ms;
  position: relative;
}
h3 {
  background: white;
  position: absolute;
  bottom: -3rem;
  width: 100%;
  opacity: 0;
  font-weight: 400;
  font-size: 1.4rem;
  transition: all 200ms easy-in-out 100ms;
  padding: 0.4rem 0 0;
}
img {
  /* border-radius: 0.7rem 0.7rem 0.7rem 0; */
  width: 160%;
  /* height: 100%; */
  transition: all 200ms;
}
.marker:hover {
  --h: 14rem;
  width: calc(var(--h) + 3rem);
  border-radius: 1rem 1rem 1rem 0;
}
.marker:hover img {
  width: 125%;
}
.marker:hover h3 {
  bottom: 0;
  opacity: 1;
}
</style>
