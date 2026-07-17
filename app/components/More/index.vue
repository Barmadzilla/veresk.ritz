<template>
  <div class="container">
    <TitleSecondary title="Больше Магии" />
    <div class="cards">
      <MoreCard v-for="(item, index) in cards" :key="index" :data="item" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const defaults = [
  {
    title: "Сыграть свадьбу",
    type: "Банкетные залы",
    description:
      "Роскошная свадьба среди соснового леса и озерной глади — великолепные декорации, созданные самой природой. ",
    link: "/",
    src: "/images/more/wedding.jpg",
  },
  {
    title: "Держи форму",
    type: "Спортиный клуб",
    description:
      "Погрузитесь в мир спорта и природы, развивайтесь физически и находите новых друзей.",
    link: "/",
    src: "/images/more/sport.jpg",
  },
  {
    title: "Летний кэмп",
    type: "Детская анимация",
    description:
      "Погрузитесь в мир спорта и природы, развивайтесь физически и находите новых друзей.",
    link: "/",
    src: "/images/more/camp.jpg",
  },
  {
    title: "Водный ретрит",
    type: "СПА и бассейн",
    description:
      "Ощутите на себе все прелести люксового СПА и Инфинити бассейна с видом на озеро!",
    link: "/",
    src: "/images/more/pool.jpg",
  },
];
const cards = props?.data || props.data != undefined ? props.data : defaults;
</script>

<style scoped>
.container {
  margin-top: 5rem;
}
.cards {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 5rem 0;
}
</style>
