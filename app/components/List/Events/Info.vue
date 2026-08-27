<template>
  <div class="info">
    <NuxtLink :to="'/events/' + slug">
      <ListCardTitle :title="title" />
    </NuxtLink>
    <ListCardParams>{{ date }} в {{ params.t }}</ListCardParams>
    <ContentMD :content="description" />
    <ListEventsFooter :link="'/events/' + slug" />
  </div>
</template>

<script setup>
const props = defineProps(["title", "params", "description", "slug"]);
const date = humanDate(props.params.d, "DD.MM.YY");
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  text-decoration-style: dotted;
}
.info {
  height: 100%;
  position: relative;
}
</style>
