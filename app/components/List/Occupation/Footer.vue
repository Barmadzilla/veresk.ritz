<template>
  <div class="footer">
    <Price :value="price" from />
    <ListCardButtons>
      <ButtonNude label="Подробнее" noArrow noBold :to="link" />
      <ButtonNude label="Забронировать" :to="bookLink" />
    </ListCardButtons>
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
@media (max-width: 1020px) {
  .footer {
    display: block;
  }
}
</style>
