<template>
  <NuxtLink
    v-if="to"
    :class="[
      'btn',
      size,
      { arrow: noArrow == undefined },
      { bold: noBold == undefined },
    ]"
    :to="to"
    >{{ label }}</NuxtLink
  >
  <div v-else :class="['btn', size]">{{ label }}</div>
</template>

<script setup>
const props = defineProps(["label", "size", "to", "noArrow", "noBold"]);
</script>

<style scoped>
.btn {
  color: white;
  font-size: 1.7rem;
  font-weight: 400;
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
  background: var(--color-primary);
  padding: 1.2rem 2.5rem;
  border-radius: 0.4rem;
  transition: all 200ms;
}
.btn.bold {
  font-weight: 500;
}
.btn.arrow::after {
  content: "";
  background: url("~/assets/images/icons/btn_arrow_white.svg") no-repeat center
    3px/ 100%;
  height: 1.5rem;
  width: 1.7rem;
  display: block;
}
.btn.small {
  font-size: 1.2rem;
}
.btn:hover {
  background: var(--color-hover);
}
</style>
