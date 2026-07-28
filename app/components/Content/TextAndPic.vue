<template>
  <section class="text-and-pic" :class="{ reverse: !reverse }">
    <ContentPicture :src="data.images" />
    <div>
      <TitleSecondary :title="data.title" left />
      <ContentSubHeader :content="data?.subtitle" />
      <ContentFeatures v-if="data?.features" :data="data.features" />
      <ContentMD :content="data.text" />
      <div class="space" />
      <ButtonGroup v-if="data?.buttons" v-bind="{ left: true, noMargin: true }">
        <ButtonNude
          v-for="(item, index) in data.buttons"
          :key="index"
          :label="item.label"
          :to="item.to"
        />
      </ButtonGroup>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["data", "reverse"]);
</script>

<style scoped>
.space {
  height: 3rem;
}
.text-and-pic {
  display: flex;
  gap: 4rem;
  text-align: left;
  align-items: center;
  padding-top: 5rem;
  margin-bottom: 5rem;
}
.text-and-pic.reverse {
  flex-direction: row-reverse;
}
</style>
