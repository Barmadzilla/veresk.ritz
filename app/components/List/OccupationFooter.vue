<template>
  <div class="footer">
    <Price :value="price" from />
    <div class="buttons">
      <ButtonNude label="Подробнее" noArrow noBold :to="link" />
      <ButtonNude label="Забронировать" :to="bookLink" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["price", "link", "bookLink"]);
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.buttons > a:first-child {
  margin-right: 2vw;
}
@media (max-width: 1020px) {
  .footer {
    display: block;
  }
  .buttons {
    margin-right: unset;
  }
}
</style>
