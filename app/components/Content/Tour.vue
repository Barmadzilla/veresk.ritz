<template>
  <section>
    <div ref="container" class="tour"></div>
  </section>
</template>

<script setup>
const container = ref(null);
let viewer = null;

const props = defineProps(["config"]);

onMounted(async () => {
  // Dynamically import pannellum and its CSS to prevent SSR window errors
  if (process.client) {
    await import("pannellum/build/pannellum.js");
    await import("pannellum/build/pannellum.css");
    viewer = window.pannellum.viewer(container.value, props.config);
  }
});

onBeforeUnmount(() => {
  if (viewer) {
    viewer.destroy();
  }
});
</script>

<style scoped>
section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tour {
  width: min(110rem, 100%);
  height: min(70rem, 100%);
  font-family: "Cocomat Pro", sans-serif;
  text-align: left;
}

.tour.pnlm-container :deep(.pnlm-panorama-info) {
  background-color: var(--color-primary);
  left: 0.6rem;
  bottom: 0.6rem;
  border-radius: 0.3rem;
  padding: 0.5rem 1.5rem;
  margin: 0;
}
</style>
