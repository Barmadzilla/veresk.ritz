<template>
  <section>
    <video controls autoplay>
      <source
        :src="video + '_1080p.mp4'"
        type="video/mp4"
        media="(min-width: 1024px)"
      />
      <source
        :src="video + '_720p.mp4'"
        type="video/mp4"
        media="(min-width: 750px)"
      />
      <source :src="video + '_480p.mp4'" type="video/mp4" />
    </video>
  </section>
</template>

<script setup>
const props = defineProps(["title", "video"]);
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
video {
  aspect-ratio: 16/9;
  width: min(130rem, 100%);
}
</style>
