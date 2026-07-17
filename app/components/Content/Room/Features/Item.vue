<template>
  <div class="feature-item">
    <img :src="'/features/' + data + '.png'" /> {{ label[data] }}
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const label = {
  wifi: "WiFi",
  vault: "Cейф",
  "air-conditioner": "Кондиционер",
  "kingsize-bed": "Двуспальная кровать",
};
</script>

<style scoped>
.feature-item {
  font-size: 1.6rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 5rem;
}
img {
  height: 5.5rem;
}
</style>
