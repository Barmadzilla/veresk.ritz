<template>
  <div
    :class="[
      'group',
      { left },
      { right },
      { 'no-margin': noMargin != undefined },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(["left", "right", "noMargin"]);
</script>

<style scoped>
.group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;
}
.left {
  justify-content: start;
}
.right {
  justify-content: end;
}
.no-margin {
  margin-bottom: 0;
}
</style>
