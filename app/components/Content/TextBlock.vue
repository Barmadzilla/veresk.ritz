<template>
  <section>
    <TitleSecondary v-if="data.title" :title="data.title" />
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
section :deep(ul) {
  font-size: 1.8rem;
  font-weight: 300;
  text-align: left;
  display: inline-block;
  width: min(100%, 80rem);
}

section :deep(ul li) {
  margin-bottom: 1rem;
}
section :deep(ul li::marker) {
  color: var(--color-primary);
}
section :deep(h3) {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 2.5rem;
}
section {
  padding: 0 12rem 0;
  margin-bottom: 5rem;
}
</style>
