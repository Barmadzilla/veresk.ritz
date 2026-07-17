<template>
  <a
    href="#top"
    class="container"
    @mouseenter="animate = false"
    @mouseleave="animate = true"
  >
    <img
      src="~/assets/images/icons/chevron.svg"
      :class="{ animate: animate }"
    />
  </a>
</template>

<script setup>
const animate = ref(true);
</script>

<style scoped>
.container {
  position: absolute;
  z-index: 1;
  margin: 3rem auto 0;
  cursor: pointer;
}
@keyframes anim {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(1rem);
  }
}
img {
  transform: translateY(0);
  transition: all 200ms;
}
img.animate {
  animation: 350ms ease-in infinite alternate anim;
}
</style>
