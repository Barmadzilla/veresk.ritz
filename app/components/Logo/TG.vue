<template>
  <NuxtLink :to="to" target="_blank">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 38 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.566 5.81445L10.0781 18.6736L0.77726 15.7756C-0.210904 15.4677 -0.275209 14.0911 0.689904 13.717C9.33905 10.3638 34.4132 0.646128 35.8246 0.137176C37.5319 -0.478442 38.2148 1.09489 37.9417 2.53119C37.7236 3.67763 33.7205 22.7334 32.1134 30.3792C31.8048 31.8476 30.0809 32.4852 28.8823 31.5849L20.2537 25.1032L15.4049 29.6861L14.3122 30.0281L14.8585 21.1361L31.044 6.49842C31.1806 6.36161 31.4128 6.04694 31.2489 5.8828C31.085 5.71867 30.7253 5.76884 30.566 5.81445Z"
        fill="#AFAFAF"
      />
    </svg>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["to", "size"]);
const size = ref(props.size ? props.size : 38);
</script>

<style scoped>
svg {
  cursor: pointer;
}
svg path {
  fill: #afafaf;
  transition: all 200ms;
}
svg:hover path {
  fill: var(--color-primary);
}
</style>
