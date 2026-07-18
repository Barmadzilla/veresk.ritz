<template>
  <div class="info">
    <ListCardTitle :title="title" />
    <ListCardParams>
      {{ params.s }}м<sup>2</sup> до {{ params.guests }} мест
      {{ params.rooms }} комн.
    </ListCardParams>
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
</style>
