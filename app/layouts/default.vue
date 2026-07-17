<template>
  <NuxtLoadingIndicator />
  <HeaderMain short />
  <ContentMain>
    <slot />
  </ContentMain>
  <FooterMain />
</template>
<script setup>
// const state = useState("BreadCrumbs", () => []);
</script>
<style scoped></style>
