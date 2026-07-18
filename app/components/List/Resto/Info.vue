<template>
  <div class="info">
    <ListCardTitle :title="title" />
    <ListCardParams> Ежедневно c {{ from }} до {{ to }} </ListCardParams>
    <ListRestoService :data="services" />
    <ContentMD :content="description" />
    <ListRestoFooter :link="link" :book="book" />
  </div>
</template>

<script setup>
import moment from "moment";
const props = defineProps([
  "title",
  "services",
  "params",
  "description",
  "link",
  "book",
]);
moment.locale("ru");
const from = moment()
  .set({
    hour: props.params.from.h,
    minute: props.params.from.m,
  })
  .format("H:mm");
const to = moment()
  .set({
    hour: props.params.to.h,
    minute: props.params.to.m,
  })
  .format("H:mm");
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
