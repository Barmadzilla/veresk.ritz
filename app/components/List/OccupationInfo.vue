<template>
  <div class="info">
    <ListCardTitle :title="title" />
    <p class="params">
      {{ params.s }}м<sup>2</sup> до {{ params.guests }} мест
      {{ params.rooms }} комн.
    </p>
    <ContentMD :content="info.description" />
    <ListOccupationFooter
      :price="info.price"
      :link="info.link"
      :bookLink="info.bookLink"
    />
  </div>
</template>

<script setup>
const props = defineProps(["title", "params", "info"]);
</script>

<style scoped>
.info {
  height: 100%;
  position: relative;
}
p {
  font-size: 1.6rem;
}
.params {
  font-weight: 500;
  margin-bottom: 1.5rem;
}
sup {
  font-size: 0.8rem;
}
</style>
