<template>
  <div class="more-card">
    <div class="picture">
      <img :src="data.src" />
    </div>
    <MoreCardTitle :title="data.title" :subtitle="data.type" />
    <p>{{ data.description }}</p>
    <ButtonNude label="Подробнее" :to="data.link" size="small" />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
.more-card {
  text-align: left;
  width: min(100%, 25rem);
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
}
.picture {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17rem;
  background: red;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
p {
  font-size: 1.3rem;
}
a.btn {
  position: absolute;
  bottom: 0;
}
</style>
