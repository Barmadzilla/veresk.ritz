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
.md ul {
  font-size: 1.6rem;
  margin-left: 2rem;
}
.md ul li::marker {
  color: var(--color-primary);
}
.md ul li {
  margin-bottom: 0.7rem;
}
</style>
