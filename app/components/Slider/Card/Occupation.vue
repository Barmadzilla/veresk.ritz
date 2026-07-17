<template>
  <section>
    <header>
      <img :src="data.src" />
    </header>
    <h2>{{ data.title }}</h2>
    <p>{{ data.description }}</p>
    <footer>
      <Price :value="data.price" />
      <ButtonNude :to="data.link" label="Забронировать" />
    </footer>
  </section>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
section {
  white-space: initial;
  text-align: left;
}
header {
  height: 19rem;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h2 {
  color: var(--color-primary);
  font-weight: 400;
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 1.5rem 0;
  margin: 0;
}
p {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
}
footer {
  display: flex;
  justify-content: space-between;
}
</style>
