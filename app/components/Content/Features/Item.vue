<template>
  <div class="feature">
    <img :src="'/icon/' + data + '.png'" />
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const features = {
  sauna: "Сауна",
  hydromassage: "Гидромассаж",
  jacuzzi: "Джакузи",
};
const title = features[props.data];
</script>

<style scoped>
img {
  width: 2.2rem;
}
.feature {
  display: flex;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
}

img {
}
</style>
