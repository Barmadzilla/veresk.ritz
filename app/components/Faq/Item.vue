<template>
  <div
    class="tab"
    v-if="data.type.some((item) => item == filter) || filter == 'all'"
  >
    <h4 @click="$emit('open')" :class="{ open: data.open }">
      {{ data.q }}
    </h4>
    <VueMarkdown
      :class="['description', { open: data.open }]"
      :markdown="data.a"
    />
  </div>
</template>

<script setup>
const props = defineProps(["data", "filter"]);
import { VueMarkdown } from "@crazydos/vue-markdown";
</script>

<style scoped>
.tab {
  border-bottom: 1px solid #e3e3e3;
  width: min(90rem, 100%);
  margin: 0 auto;
}
.description {
  text-align: left;
  font-size: 1.3rem;
  overflow: hidden;
  max-height: 0;
  transition: all 200ms;
  /* padding-bottom: 0; */
}

.description.open {
  max-height: 70rem;
  padding-bottom: 2.5rem;
}
.description :deep(a) {
  color: var(--color-link);
}
.description :deep(p) {
  font-size: 1.8rem;
}
.description :deep(strong) {
  font-weight: 500;
  color: var(--color-primary);
}
.description :deep(ul) {
  /* list-style-position: inside; */
  font-size: 1.8rem;
  margin-left: 1.5rem;
  padding: 1.5rem;
}
.description :deep(li::marker) {
  color: var(--color-primary);
}
h4 {
  font-size: 2rem;
  color: var(--color-primary);
  font-weight: 400;
  text-align: left;
  padding: 2rem 0;
  position: relative;
  cursor: pointer;
  transition: all 200ms;
}
h4::after {
  content: "";
  background: url("~/assets/images/icons/tab_arrow.svg") no-repeat center;
  height: 2rem;
  width: 2rem;
  position: absolute;
  right: 0;
  top: 2.5rem;
  transform: rotate(0deg);
  transition: all 200ms;
}
h4.open {
  font-weight: 500;
}
h4.open::after {
  transform: rotate(90deg);
}
</style>
