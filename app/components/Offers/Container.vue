<template>
  <section class="offers">
    <OffersItem v-for="(item, i) in data" :key="i" :data="item" />
  </section>
</template>

<script setup>
const data = [
  { title: "Свадьба", src: "/icons/marriage.png", link: "/" },
  { title: "Корпаратив", src: "/icons/corp.png", link: "/" },
  { title: "День Рождения", src: "/icons/hb.png", link: "/" },
  { title: "Банкет", src: "/icons/banquet.png", link: "/" },
  { title: "Детям", src: "/icons/kids.png", link: "/" },
  { title: "Спорт", src: "/icons/sport.png", link: "/" },
  { title: "СПА", src: "/icons/spa.png", link: "/" },
];
</script>

<style scoped>
.offers {
  display: flex;
  gap: 4vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
}
</style>
