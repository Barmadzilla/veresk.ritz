<template>
  <HeaderMain />
  <main class="content">
    <slot />
  </main>
  <FooterMain />
</template>
<script setup>
// const state = useState("BreadCrumbs", () => []);
</script>
<style scoped>
.content {
  display: flex;
  margin-top: var(--header-height);
}
@media (max-width: 800px) {
  .content {
    margin-top: unset;
    display: block;
  }
}
</style>
