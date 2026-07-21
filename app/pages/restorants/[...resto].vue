<template>
  <div>
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
    <ContentParams>Ежедневно {{ workingHours }}</ContentParams>
    <ButtonGroup>
      <ButtonIconNude icon="banquet" label="Меню" to="/" />
      <ButtonSolid label="Забронировать Стол" to="/" />
    </ButtonGroup>
    <ContentTextBlock :data="list.description" />
    <ButtonGroup>
      <ButtonRoomMedia type="virtual-tour" />
      <ButtonRoomMedia type="video" />
      <ButtonRoomMedia type="gallery" />
    </ButtonGroup>
    <component
      v-for="(item, index) in data.content"
      :key="index"
      :is="
        item.type == 'textAndPic'
          ? TextAndPic
          : item.type == 'textBlock'
            ? TextBlock
            : item.type == 'slideShow'
              ? SlideShow
              : null
      "
      v-bind="
        item.type == 'slideShow'
          ? { type: 'image', cards: 1, data: item.slideShow }
          : { data: item, reverse: index % 2 == 0 }
      "
    />
    <More />
  </div>
</template>

<script setup>
const route = useRoute();

const TextAndPic = resolveComponent("ContentTextAndPic");
const TextBlock = resolveComponent("ContentTextBlock");
const SlideShow = resolveComponent("SliderContainer");

const listData = restorantsData();
const list = listData.value.find((item) => item.slug == route.params.resto[0]);
const workingHours = fromTo(list.working.from, list.working.to);

const content = {
  veresk: vereskData(),
  primavera: primaveraData(),
};

const data = ref(content[route.params.resto[0]]);

const poster = setPoster();
poster.value = "/images/posters/restorants.jpg";

definePageMeta({
  parent: [{ title: "Рестораны", slug: "/restorants" }],
});
</script>

<style scoped></style>
