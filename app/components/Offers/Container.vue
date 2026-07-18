<template>
  <section class="offers">
    <OffersItem v-for="(item, i) in data" :key="i" :data="item" />
  </section>
</template>

<script setup>
const data = [
  { title: "Свадьба", src: "/icon/marriage.png", link: "/" },
  { title: "Корпаратив", src: "/icon/corp.png", link: "/" },
  { title: "День Рождения", src: "/icon/hb.png", link: "/" },
  { title: "Банкет", src: "/icon/banquet.png", link: "/" },
  { title: "Детям", src: "/icon/kids.png", link: "/" },
  { title: "Спорт", src: "/icon/sport.png", link: "/" },
  { title: "СПА", src: "/icon/spa.png", link: "/" },
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
