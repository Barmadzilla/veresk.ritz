<template>
  <div class="container">
    <SlideButton @click.stop="prev()" :reverse="true" class="prev" />
    <PictureGalleryItem
      v-for="(pic, i) in items"
      class="pic"
      :key="pic"
      :id="pic"
      v-show="i == currentItem"
    />
    <SlideButton @click.stop="next()" class="next" />
  </div>
</template>

<script setup>
const { items, current } = defineProps(["items", "current"]);
const currentItem = ref(current);

const total = items.length;

const next = () => {
  if (currentItem.value < total - 1) {
    currentItem.value++;
  } else {
    currentItem.value = 0;
  }
};

const prev = () => {
  if (currentItem.value > 0) {
    currentItem.value--;
  } else {
    currentItem.value = total - 1;
  }
};
</script>

<style scoped>
.container {
  padding: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  --m: -7rem;
}
.pic {
}
.prev {
  margin-right: var(--m);
  z-index: 10;
}
.next {
  margin-left: var(--m);
  z-index: 10;
}
</style>
