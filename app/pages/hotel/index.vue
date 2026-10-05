<template>
  <div>
    <BreadCrumbs />
    <TitleMain :title="title" />
    <ContentTextBlock :data="text" />
    <FaqFilter
      f-if="false"
      :data="tags"
      :filter="currentTag"
      before="фильтр"
      @setFilter="(item) => (currentTag = item)"
    />
    <ListOccupationCard
      v-for="(item, i) in occupation"
      :data="item"
      :filter="currentTag"
    />
  </div>
</template>

<script setup>
const router = useRoute();
const title = "Номера, сьюты, дома и глемпинг";

const currentTag = ref("all");

definePageMeta({
  title,
});

const poster = setPoster();
poster.value = "/images/posters/dacha.jpg";

const text =
  "Добро пожаловать в ВерескОтель — идеальное место для тех, кто ищет сочетание комфорта, живописных видов и разнообразных возможностей для отдыха. У нас большое количество вариантов размещения на любой вкус! ";

const occupation = occupationData();
const tags = [
  "all",
  ...new Set(occupation.value.flatMap((room) => room.info.type)),
];
setSeo({
  title,
  excerpt: text,
});
</script>

<style scoped></style>
