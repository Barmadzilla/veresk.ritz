<template>
  <section class="offers">
    <OffersItem v-for="(item, i) in data" :key="i" :data="item" />
  </section>
</template>

<script setup>
const props = defineProps(["data"]);

const defaultData = [
  { title: "Свадьба", src: "/icon/marriage.png", link: "/wedding" },
  { title: "Корпаратив", src: "/icon/corp.png", link: "/corparate-events" },
  { title: "День Рождения", src: "/icon/hb.png", link: "/" },
  { title: "Банкет", src: "/icon/banquet.png", link: "/" },
  { title: "Детям", src: "/icon/kids.png", link: "/" },
  { title: "Спорт", src: "/icon/sport.png", link: "/" },
  { title: "СПА", src: "/icon/spa.png", link: "/spa-resort" },
];
const data = ref(props.data != undefined ? props.data : defaultData);
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
