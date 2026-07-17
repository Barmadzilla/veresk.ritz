<template>
  <p v-show="false">{{ scrollWidth }} - {{ scrollX }} - {{ step }}</p>
  <section class="slider">
    <SliderButton :disabled="validPrev" @click="prev()" />
    <div ref="container" class="container">
      <div class="card" v-for="(item, i) in data" :key="i">
        <SliderCardOccupation v-if="type == 'occupation'" :data="item" />
        <SliderCardImage v-if="type == 'image'" :data="item" />
      </div>
    </div>
    <SliderButton :disabled="validNext" reverse="true" @click="next()" />
  </section>
</template>

<script setup>
const props = defineProps(["data", "type", "cards"]);
const scrollContainer = useTemplateRef("container");
const scrollWidth = ref(0);
const scrollX = ref(0);
// const scrollRight = ref(0);
//задаем количество карточек в слайдере
const scrolledCards = props.cards ? props.cards : 3;
const data = ref(props.data);
const step = computed(() => {
  return scrollWidth.value / scrolledCards;
});
const validNext = computed(
  () =>
    Math.round(scrollX.value + scrollWidth.value) ==
    Math.round(step.value * data.value.length),
);
const validPrev = computed(() => scrollX.value <= 0);

const setWidth = () => {
  if (!scrollContainer.value) return;
  scrollWidth.value = scrollContainer.value.offsetWidth;
  // scrollX.value = scrollContainer.value.scrollLeft;
  // scrollRight.value = scrollContainer.value.scrollRight;
  scrollContainer.value.style.setProperty(
    "--scrollWidth",
    scrollWidth.value + "px",
  );
  scrollContainer.value.style.setProperty("--items", scrolledCards);
  scrollContainer.value.style.setProperty(
    "--height",
    scrollContainer.value.offsetHeight + "px",
  );
  scrollContainer.value.style.setProperty("--items", scrolledCards);
};

const next = () => {
  validNext && scrollContainer.value.scrollTo(step.value + scrollX.value, 0);
};

const prev = () => {
  validPrev && scrollContainer.value.scrollTo(scrollX.value - step.value, 0);
};

const scrollListener = (event) => {
  scrollX.value = event.target.scrollLeft;
};
onMounted(() => {
  //инициируем ширину
  setWidth();
  scrollContainer.value.addEventListener("scroll", scrollListener);
  scrollContainer.value.scrollTo(0, 0);
  window.addEventListener("resize", setWidth); //слушаем ширину при изменении размеров окна
  // scrollContainer.value.scrollTo(0, 0);
  console.log();
});

// onBeforeUnmounted(() => {
//   window.removeEventListener("resize", setWidth); //слушаем ширину при изменении размеров окна
//   scrollContainer.value.removeEventListener("scroll", scrollListener);
// });
</script>

<style scoped>
section.slider {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.container {
  /* --items: 3; */
  /* overflow-x: hidden; */
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;
  /* scrolling behavior */
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 5rem 0 10rem;
}
/* hide scrollbar */
.container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.container::-webkit-scrollbar {
  display: none;
}
.card {
  scroll-snap-align: start;
  width: calc(var(--scrollWidth) / var(--items));
  /* background: lightgrey; */
  padding: 0 1.5rem;
  box-sizing: border-box;
  /* border: 1px dashed grey; */
  display: inline-block;
}
</style>
