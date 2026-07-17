<template>
  <div class="features">
    <ContentRoomFeaturesItem
      v-for="(item, index) in data"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
.features {
  display: flex;
  justify-content: center;
  gap: 5rem;
  position: relative;
}
</style>
