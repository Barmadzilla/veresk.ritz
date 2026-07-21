<template>
  <VueMarkdown class="md" :markdown="content" />
</template>

<script setup>
import { VueMarkdown } from "@crazydos/vue-markdown";
const props = defineProps(["content"]);
</script>

<style>
.md p {
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 1.7rem;
}
.md strong,
.md b {
  font-weight: 500;
}
</style>
