<template>
  <NuxtLink :to="to" target="_blank">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 41 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8 24.975C8.125 24.975 0.325 15.6 0 0H6.85C7.075 11.45 12.1249 16.3 16.1249 17.3V0H22.5751V9.8749C26.5251 9.4499 30.6746 4.95 32.0746 0H38.5248C37.4498 6.1 32.9498 10.6 29.7498 12.4499C32.9498 13.9499 38.075 17.875 40.025 24.975H32.9248C31.3998 20.225 27.6001 16.55 22.5751 16.0499V24.975H21.8Z"
        fill="#AFAFAF"
      />
    </svg>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["to", "size"]);
const size = ref(props.size ? props.size : 42);
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
