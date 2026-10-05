<template>
  <div v-if="data">
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
    <ContentParams>{{ data.subtitle }}</ContentParams>
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
              : item.type == 'buttons'
                ? Buttons
                : item.type == 'space'
                  ? Space
                  : item.type == 'offers'
                    ? Offers
                    : item.type == 'mapField'
                      ? MapField
                      : null
      "
      v-bind="
        item.type == 'slideShow'
          ? { type: 'image', cards: 1, data: item.slideShow }
          : item.type == 'buttons'
            ? { data: item.buttons }
            : item.type == 'offers'
              ? { data: item.offers }
              : { data: item, reverse: index % 2 != 0 }
      "
    />
    <More />
  </div>
</template>

<script setup>
const TextAndPic = resolveComponent("ContentTextAndPic");
const TextBlock = resolveComponent("ContentTextBlock");
const SlideShow = resolveComponent("SliderContainer");
const Buttons = resolveComponent("ContentButtons");
const Space = resolveComponent("ContentSpace");
const Offers = resolveComponent("OffersContainer");
const MapField = resolveComponent("MapField");

const route = useRoute();

const content = {
  "corporate-events": corpEventData(),
  "business-events": businessEventData(),
  "eco-park": ecoParkData(),
  "for-kids": forKidsData(),
  contacts: contactsData(),
};

const data = ref(content[route.params.page]);
if (data.value == undefined || data.value.length == 0) {
  throw createError({
    status: 404,
    message: "Страница не найдена",
  });
}

const poster = setPoster();
poster.value = data.value.poster;
setSeo({
  title: data.value.title,
  excerpt: data.value.content[0].text,
});
</script>
