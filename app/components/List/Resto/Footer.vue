<template>
  <div class="footer">
    <ListCardButtons>
      <ButtonNude label="Подробнее" noArrow noBold :to="'/restorants' + link" />
      <ButtonNude v-if="book" label="Забронировать" :to="book" />
    </ListCardButtons>
  </div>
</template>

<script setup>
const props = defineProps(["link", "book"]);
</script>

<style scoped>
.footer {
  /* width: 100%; */
  position: absolute;
  bottom: 0;
  right: 0;
}
@media (max-width: 1020px) {
  .footer {
    display: block;
  }
}
</style>
