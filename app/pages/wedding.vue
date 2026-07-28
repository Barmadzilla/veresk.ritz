<template>
  <div>
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
    <ContentParams>
      Лучшие природные декорации, свадьба на СПА-Курорте “Вереск”
    </ContentParams>
    <ButtonGroup>
      <ButtonIconNude icon="banquet" label="Банкетное Меню" to="/" />
      <ButtonSolid label="Рассчитать Стоимость" to="/" />
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
              : item.type == 'space'
                ? Space
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
const TextAndPic = resolveComponent("ContentTextAndPic");
const TextBlock = resolveComponent("ContentTextBlock");
const SlideShow = resolveComponent("SliderContainer");
const Space = resolveComponent("ContentSpace");

const data = weddingData();

const poster = setPoster();
poster.value = data.value.poster;
</script>

<style scoped></style>
