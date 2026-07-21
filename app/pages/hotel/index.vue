<template>
  <div>
    <BreadCrumbs />
    <TitleMain :title="title" />
    <ContentTextBlock :data="text" />
    <ListOccupationCard v-for="(item, i) in occupation" :data="item" />
  </div>
</template>

<script setup>
const router = useRoute();
const title = "Номера, сьюты, дома и глемпинг";

definePageMeta({
  title,
});

const poster = setPoster();
poster.value = "/images/posters/dacha.jpg";

const text =
  "Добро пожаловать в ВерескОтель — идеальное место для тех, кто ищет сочетание комфорта, живописных видов и разнообразных возможностей для отдыха. У нас большое количество вариантов размещения на любой вкус! ";

const occupation = occupationData();
</script>

<style scoped></style>
