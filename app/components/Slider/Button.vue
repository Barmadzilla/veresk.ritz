<template>
  <svg
    :class="[{ disabled }, { reverse }]"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle class="btn" cx="28" cy="28" r="25" />
    <path class="btn" d="M32.7548 15.8491L22.1887 28.3489L32.7548 40.8486" />
  </svg>
</template>

<script setup>
const props = defineProps(["disabled", "reverse"]);
</script>

<style scoped>
svg {
  cursor: pointer;
}
svg.reverse {
  transform: rotate(180deg);
}
svg.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn {
  stroke: var(--color-primary);
  fill: transparent;
  transition: all 200ms;
}
.btn {
  stroke-width: 2;
}
svg:hover .btn {
  stroke-linecap: round;
  stroke-width: 3;
  /* fill: pink; */
}
</style>
