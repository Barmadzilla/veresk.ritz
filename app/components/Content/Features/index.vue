<template>
  <div class="features">
    <ContentFeaturesItem
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
  gap: 1.8rem;
  margin: 2rem 0;
}
</style>
