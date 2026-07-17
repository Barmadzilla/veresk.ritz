<template>
  <main>
    <div :class="['content', { short: short != undefined }]">
      <slot />
    </div>
  </main>
</template>
<script setup>
const props = defineProps(["short"]);
</script>

<style scoped>
main {
  background:
    url("~/assets/images/main_bg_top_right.png") no-repeat right top,
    url("~/assets/images/main_bg_bottom_left.png") no-repeat bottom -5rem left;
}
.content {
  max-width: 120rem;
  padding: 5rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
  /* background: lightgrey; */

  /* margin-top: var(--header-height); */
}
.content.short {
  padding-top: 2rem;
}
@media (max-width: 800px) {
  .content {
    display: block;
  }
}
</style>
