<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
// const config = useRuntimeConfig();
// const { data: projectStatus } = await useFetch(
//   config.public.apiUrl + "project_status",
//   {
//     key: "status",
//     query: {
//       _fields: ["name", "id", "slug", "acf.icon", "description"].join(","),
//     },
//   },
// );
//
// let { data: mainMenu } = await useFetch(config.public.apiUrl + "menu-items", {
//   key: "mainMenu",
//   query: {
//     menus: 6,
//     // per_page: 100,
//     _fields: ["title", "id", "url", "menus"].join(","),
//     // _fields: "title,content,featured_media,acf,id"
//   },
// });
//
// const { data: options } = await useFetch(config.public.apiUrl + "options", {
//   key: "options",
// });
//
// useState("options", () => options);

useHead({
  meta: [{ name: "theme-color", content: "#4d0073" }],
});
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
  transform: translateX(1rem);
}
</style>
