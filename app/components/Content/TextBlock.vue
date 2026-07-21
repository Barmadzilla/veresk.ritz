<template>
  <section>
    <VueMarkdown :markdown="data?.text ? data.text : data" />
    <slot />
  </section>
</template>

<script setup>
import { VueMarkdown } from "@crazydos/vue-markdown";
const props = defineProps(["data"]);
</script>

<style scoped>
section :deep(p) {
  font-size: 2rem;
  font-weight: 300;
  padding-bottom: 4rem;
  /* margin: 0 12rem 0; */
  line-height: 1.6;
}
section {
  padding: 0 12rem 0;
  margin-bottom: 5rem;
}
</style>
