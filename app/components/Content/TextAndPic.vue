<template>
  <section class="text-and-pic" :class="{ reverse: !reverse }">
    <ContentPicture :src="data.images" />
    <div>
      <TitleSecondary :title="data.title" left />
      <ContentMD :content="data.text" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["data", "reverse"]);
const test = `Ужин в «Вереске» — это не только комфортный вечер и вкусная еда. Это настоящее путешествие в мир вкусов, оттенков, текстуры; это томительное  предвкушение и долгое приятное послевкусие. Маршрут путешествия составляете вы сами, а мы поможем: наши внимательные официанты и команда опытных поваров сделает все, чтоб оставить у вас самые прекрасные воспоминания! `;
const src = "/images/occupation/standart-1.jpg";
</script>

<style scoped>
.text-and-pic {
  display: flex;
  gap: 4rem;
  text-align: left;
  align-items: center;
  padding-top: 5rem;
  margin-bottom: 5rem;
}
.text-and-pic.reverse {
  flex-direction: row-reverse;
}
</style>
