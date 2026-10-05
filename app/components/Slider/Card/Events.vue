<template>
  <section>
    <header>
      <img :src="data.data.images[0]" />
    </header>
    <h2>{{ eventDate }}</h2>
    <p>{{ data.data.title }}</p>
    <footer>
      <ButtonNude :to="'events/' + data.slug" label="подробнее" />
    </footer>
  </section>
</template>

<script setup>
const props = defineProps(["data"]);
const eventDate = humanDate(props.data.data.event_date.d);
</script>

<style scoped>
section {
  white-space: initial;
  height: 100%;
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
  font-weight: 500;
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
  justify-content: center;
}
</style>
