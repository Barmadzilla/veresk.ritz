<template>
  <div class="additional">
    <TitleSecondary title="Дополнительная Информация" />
    <div class="container">
      <ContentRoomAdditionalTabs />
      <ContentRoomAdditionalContact />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.additional {
  margin: 10rem auto;
  width: min(100%, 100rem);
}
.container {
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 7vw;
}
</style>
