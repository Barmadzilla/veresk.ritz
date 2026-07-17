<template>
  <div class="room-media">
    <img :src="icon" />
    <h4>{{ label }}</h4>
  </div>
</template>

<script setup>
const props = defineProps(["type"]);
const icon = computed(() => {
  if (props.type == "virtual-tour") return "/icons/vt.png";
  if (props.type == "video") return "/icons/video.png";
  if (props.type == "gallery") return "/icons/gallery.png";
});
const label = computed(() => {
  if (props.type == "virtual-tour") return "Виртуальный тур";
  if (props.type == "video") return "Видео";
  if (props.type == "gallery") return "Фото галлерея";
});
</script>

<style scoped>
.room-media {
  cursor: pointer;
}
.room-media * {
  transition: all 200ms;
}

.room-media:hover img {
  bottom: 1rem;
}

.room-media:hover h4 {
  color: var(--color-primary);
}
img {
  height: 4.5rem;
  position: relative;
  bottom: 0;
}
h4 {
  color: #666;
  font-size: 1.7rem;
  font-weight: 500;
}
</style>
