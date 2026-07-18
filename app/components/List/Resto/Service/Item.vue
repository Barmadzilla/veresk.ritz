<template>
  <div class="service">
    <img :src="'/icon/' + data + '.png'" />{{ label[data] }}
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const label = {
  fastfood: "Фаст Фуд",
  dinner: "Ужин",
  lunch: "Обед",
  breakfast: "Завтрак",
};
</script>

<style scoped>
.service {
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 1;
  font-size: 1.6rem;
}

img {
  height: 2.8rem;
  width: 2.8rem;
}
</style>
