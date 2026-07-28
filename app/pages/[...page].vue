<template>
  <div>
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
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

const route = useRoute();

const content = {
  "corporate-events": corpEventData(),
};

const data = ref(content[route.params.page[0]]);

const poster = setPoster();
poster.value = data.value.poster;
</script>

<style scoped></style>
