<template>
  <div>
    <BreadCrumbs />
    <TitleMain :title="title" />
    <ContentTextBlock :data="text" />
    <ListRestoCard
      v-for="(item, index) in listData"
      :key="index"
      :data="item"
    />
    <More />
  </div>
</template>

<script setup>
const title = "Рестораны спа-курорта вереск";
const text =
  "Наш ресторан «Вереск» в каждой детали вдохновлен чистотой и естественностью природы. Мы постарались создать уютное пространство наедине с природой: панорамный вид на сосновый лес и берег озера, оборудованные террасы и спуски к воде, много дерева в интерьерах и комфорт в каждой детали.";
const poster = setPoster();
poster.value = "/images/posters/restorants.jpg";

definePageMeta({
  title: "Рестораны",
});
const listData = restorantsData();
</script>

<style scoped></style>
