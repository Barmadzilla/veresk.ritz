<template>
  <div v-if="data">
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
    <FaqFilter
      :data="tags"
      :filter="currentTag"
      @setFilter="(item) => (currentTag = item)"
    />
    <FaqItem
      v-for="(item, index) in faq"
      :data="item"
      :key="index"
      @open="item.open = !item.open"
      :filter="currentTag"
    />
    <More />
  </div>
</template>

<script setup>
const route = useRoute();
const currentTag = ref("all");
const data = faqData();
//collect all tags and set new flat array
const tags = [
  ...new Set(data.value.content.reduce((a, b) => [...a, ...b.type], ["all"])),
];
//adding open prop to items and reactivity
const faq = ref(
  data.value.content.map((item) => {
    return { ...item, open: false };
  }),
);

const poster = setPoster();
poster.value = data.value.poster;
setSeo({
  title: data.value.title,
  excerpt:
    "Ответы на самые распространенные вопросы про СПА-Курорт Вереск. Проживание, посещение бассейна, рестораны и СПА процедуры",
});
</script>
