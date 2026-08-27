<template>
  <div>
    <BreadCrumbs />
    <TitleMain :title="title" />
    <ContentTextBlock :data="text" />
    <ListEventsCard
      v-for="(item, i) in events"
      :data="item.data"
      :slug="item.slug"
    />
  </div>
</template>

<script setup>
const router = useRoute();
const title = "Афиша мероприятий СПА-Курорта Вереск";

definePageMeta({
  title,
});

const poster = setPoster();
poster.value = "/images/posters/dacha.jpg";

const text =
  "Приглашаем посетить мероприятия СПА-Курорта “Вереск”, отдохнуть и хорошо провести время.";

const events = vereskEventsData();
</script>

<style scoped></style>
