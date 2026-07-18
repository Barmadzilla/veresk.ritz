<template>
  <div>
    <BreadCrumbs current="Title" />
    <TitleMain title="restoran" />
  </div>
</template>

<script setup>
const route = useRoute();
definePageMeta({
  parent: [{ title: "Рестораны", slug: "/restorants" }],
});
</script>

<style scoped></style>
