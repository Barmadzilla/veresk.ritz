<template>
  <div class="tab">
    <h4 @click="$emit('open')" :class="{ open: data.open }">
      {{ data.title }}
    </h4>
    <VueMarkdown
      :class="['description', { open: data.open }]"
      :markdown="data.description"
    />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
import { VueMarkdown } from "@crazydos/vue-markdown";
</script>
<style>
.description p {
  font-size: 1.3rem;
}
.description ul {
  /* list-style-position: inside; */
  margin-left: 1.5rem;
  padding-bottom: 1.5rem;
}
.description ul li::marker {
  color: var(--color-primary);
}
.description strong {
  /* font-weight: 600; */
  color: var(--color-primary);
}
</style>
<style scoped>
.tab {
  border-bottom: 1px solid #e3e3e3;
}
.description {
  text-align: left;
  font-size: 1.3rem;
  overflow: hidden;
  max-height: 0;
  transition: all 200ms;
  padding-bottom: 0;
}

.description.open {
  max-height: 100px;
  padding-bottom: 1.5rem;
}
h4 {
  font-size: 1.6rem;
  color: var(--color-primary);
  font-weight: 400;
  text-align: left;
  padding: 1.5rem 0;
  position: relative;
  cursor: pointer;
  transition: all 200ms;
}
h4::after {
  content: "";
  background: url("~/assets/images/icons/tab_arrow.svg") no-repeat center;
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  right: 0;
  top: 1.8rem;
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
