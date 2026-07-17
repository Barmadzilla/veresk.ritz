<template>
  <div class="banner">
    <img :src="src" />
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <ButtonNude label="подробнее" size="small" />
    </div>
  </div>
</template>

<script setup>
const { src, title, description, link } = {
  src: "/images/infinity_pool_small.jpg",
  title: "Июнь  на СПА-курорте",
  description: "Эксклюзивное предложение для проживающих",
  link: "#",
};
</script>

<style scoped>
.banner {
  display: flex;
  overflow: hidden;
  border-radius: 0.3rem;
  background: white;
  width: 100%;
  margin: 1.5rem 0;
}
.content {
  padding: 1rem 1.5rem;
}
p {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-primary);
}
img {
  width: 11.5rem;
}
</style>
