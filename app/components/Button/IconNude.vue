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
    ><img :src="'/icon/' + icon + '.png'" />{{ label }}</NuxtLink
  >
  <div v-else :class="['btn', size]">
    <img :src="'/icon/' + icon + '.png'" />{{ label }}
  </div>
</template>

<script setup>
const props = defineProps(["label", "size", "to", "icon", "noArrow", "noBold"]);
</script>

<style scoped>
.btn {
  color: #626262;
  font-size: 1.7rem;
  font-weight: 400;
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
}
img {
  height: 2.8rem;
  flex-shrink: 0;
}
.btn.bold {
  font-weight: 500;
  /* color: var(--color-primary); */
}
.btn.arrow::after {
  flex-shrink: 0;
  content: "";
  background: url("~/assets/images/icons/btn_arrow.svg") no-repeat center / 100%;
  height: 0.9rem;
  width: 1.4rem;
  display: block;
}
.btn.small {
  font-size: 1.2rem;
}
</style>
